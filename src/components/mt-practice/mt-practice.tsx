import { Component, Listen, Prop, State } from "@stencil/core"

import * as state from "../../state"

@Component({
	tag: "mt-practice",
	styleUrl: "mt-practice.css",
})
export class MtPractice {
	@State() lesson: state.Lesson = new state.Lesson(next => this.lesson = next)
	@Prop() category: string | undefined
	@Prop() name: string | undefined
	toastController!: HTMLIonToastControllerElement

	componentWillLoad() {
		return this.lesson.load(`/api/lessons/${this.category}/${this.name}/index.json`)
	}
	@Listen("answered")
	answeredHandler(event: CustomEvent<number>) {
		if (this.lesson) {
			const correct = this.lesson.current.correct
			this.verify(event.detail, correct)
		}
	}
	private async verify(answer: number | undefined, correct: number) {
		if (this.lesson) {
			this.lesson.current.answers.push(answer || Number.NaN)
			if (answer == correct)
				this.lesson.next()
			else {
				await this.toastController.componentOnReady()
				const element = await this.toastController.create({
					message: this.lesson.current.answered,
					position: "bottom",
					duration: 3000,
					color: "danger",
				})
				await element.present()
			}
		}
	}
	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>{this.lesson ? this.lesson.name : "loading"}</ion-title>
				</ion-toolbar>
			</ion-header>,
			<ion-content padding>
				{ (this.lesson) ? [
				<mt-practice-task task={this.lesson.current.task}></mt-practice-task>,
				<ion-toast-controller ref={(element: HTMLElement | undefined) => this.toastController = element as HTMLIonToastControllerElement}></ion-toast-controller>
				] :
				<ion-loading></ion-loading>
				}
			</ion-content>,
		]
	}
}
