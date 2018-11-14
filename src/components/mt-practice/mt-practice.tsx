import { Component, Listen, Prop, State } from "@stencil/core"

import { Lesson } from "../../model"

@Component({
	tag: "mt-practice",
	styleUrl: "mt-practice.css",
})
export class MtPractice {
	@State() current = 0
	@State() error: string | undefined
	@State() lesson: Lesson | undefined
	@Prop() category: string | undefined
	@Prop() name: string | undefined
	answers: number[][] | undefined
	toastController!: HTMLIonToastControllerElement

	componentWillLoad() {
		return fetch("/api/lessons/multiplication/full/index.json").then(response => response.json()).then(data => {
			this.lesson = data as Lesson | undefined
			if (this.lesson)
				this.answers = this.lesson.tasks.map(_ => [])
			this.current = this.next()
		})
	}
	@Listen("answered")
	answeredHandler(event: CustomEvent<number>) {
		if (this.lesson) {
			const correct = this.lesson.tasks[this.current][1]
			this.verify(event.detail, correct)
		}
	}
	private async verify(answer: number | undefined, correct: number) {
		if (this.lesson && this.answers) {
			this.answers[this.current].push(answer || Number.NaN)
			if (answer == correct)
				this.current = this.next()
			else {
				await this.toastController.componentOnReady()
				const element = await this.toastController.create({
					message: this.lesson.tasks[this.current][0].replace("*", "×").replace("_", this.lesson.tasks[this.current][1].toString()),
					position: "bottom",
					duration: 3000,
					color: "danger",
				})
				await element.present()
			}
		}
	}
	private next(): number {
		return this.lesson ? (this.current + 1) % this.lesson.tasks.length : 0
	}
	render() {
		return this.lesson ? [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>{this.lesson.name}</ion-title>
				</ion-toolbar>
			</ion-header>,
			<ion-content padding>
				<mt-practice-task task={this.lesson.tasks[this.current][0]}></mt-practice-task>
				<ion-toast-controller ref={(element: HTMLElement | undefined) => this.toastController = element as HTMLIonToastControllerElement}></ion-toast-controller>,
			</ion-content>,
		] : [ <ion-loading></ion-loading> ]
	}
}
