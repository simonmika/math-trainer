import { Component, Prop, State } from "@stencil/core"

import { Lesson, Task } from "../../model"

@Component({
	tag: "mt-practice",
	styleUrl: "mt-practice.css",
})
export class MtPractice {
	@State() current = 0
	@State() lesson: Lesson | undefined
	@Prop() category: string | undefined
	@Prop() name: string | undefined

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
		return fetch("/api/lessons/multiplication/full/index.json").then(response => response.json()).then(data => { this.lesson = data })
	}
	private verify(answer: number | undefined, correct: number) {
		if (answer == correct && this.lesson)
			this.current = (this.current + 1) % this.lesson.tasks.length
		else
			alert(correct)
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
		] : [ <ion-loading></ion-loading> ]
	}
	private renderTaskItem(item: string) {
		switch (item) {
			case "+": return <ion-label>&plus;</ion-label>
			case "-": return <ion-label>&minus;</ion-label>
			case "*": return <ion-label>&times;</ion-label>
			case "/": return <ion-label>&divide;</ion-label>
			case "_": return <ion-input type="number" autofocus value="0" inputMode="numeric" onKeyUp={ e => { if (e.code == "Enter") this.handleSubmit(e) } } ref={(element: HTMLElement | undefined) => this.input = element as HTMLIonInputElement}></ion-input>
			default: return <ion-label>{item}</ion-label>
		}
	}

}
