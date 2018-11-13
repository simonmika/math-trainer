import { Component, Prop, State } from "@stencil/core"

import { Lesson, Task } from "../../model"

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
	input!: HTMLIonInputElement
	handleSubmit = (ev: Event) => {
		ev.preventDefault()
		if (this.lesson && this.input) {
			const answer = this.input.value != undefined ? parseFloat(this.input.value) : undefined
			const correct = this.lesson.tasks[this.current][1]
			this.verify(answer, correct)
		}
	}
	componentWillLoad() {
		return fetch("/api/lessons/multiplication/full/index.json").then(response => response.json()).then(data => {
			this.lesson = data as Lesson | undefined
			if (this.lesson)
				this.answers = this.lesson.tasks.map(_ => [])
			this.current = this.next()
		})
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
				this.input.value = ""
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
				{this.renderTask(this.lesson.tasks[this.current])}
			</ion-content>,
		] : [ <ion-loading></ion-loading> ]
	}
	renderTask(task: Task) {
		return task ? [
			<form onSubmit={this.handleSubmit}>
				<ion-item>
					{task[0].split(/\s+/).map(item => this.renderTaskItem(item))}
					<ion-button href="#" type="submit"><ion-icon name="arrow-round-forward"></ion-icon></ion-button>
				</ion-item>
			</form>,
			<ion-toast-controller ref={(element: HTMLElement | undefined) => this.toastController = element as HTMLIonToastControllerElement}></ion-toast-controller>,
		] : [ <ion-loading></ion-loading> ]
	}
	private renderTaskItem(item: string) {
		switch (item) {
			case "+": return <ion-label>&plus;</ion-label>
			case "-": return <ion-label>&minus;</ion-label>
			case "*": return <ion-label>&times;</ion-label>
			case "/": return <ion-label>&divide;</ion-label>
			case "_": return <ion-input type="number" autofocus value="" inputMode="numeric" onKeyUp={ e => { if (e.code == "Enter") this.handleSubmit(e) } } ref={(element: HTMLElement | undefined) => this.input = element as HTMLIonInputElement}></ion-input>
			default: return <ion-label>{item}</ion-label>
		}
	}

}
