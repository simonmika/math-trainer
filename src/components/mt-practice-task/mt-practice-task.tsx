import { Component, Event, EventEmitter, Prop } from "@stencil/core"

@Component({
	tag: "mt-practice-task",
	styleUrl: "mt-practice-task.css",
})
export class MtPracticeTask {
	@Prop() task?: string
	@Event() answered?: EventEmitter<number>
	input!: HTMLIonInputElement
	handleSubmit = (ev: Event) => {
		ev.preventDefault()
		if (this.task && this.input && this.answered)
			this.answered.emit(this.input.value != undefined ? parseFloat(this.input.value) : undefined)
		this.input.value = ""
	}
	render() {
		return this.task ? [
			<form onSubmit={this.handleSubmit}>
				<ion-item>
					{this.task.split(/\s+/).map(item => this.renderTaskItem(item))}
					<ion-button href="#" type="submit"><ion-icon name="arrow-round-forward"></ion-icon></ion-button>
				</ion-item>
			</form>,
		] : [ <ion-loading></ion-loading> ]
	}
	private renderTaskItem(item: string) {
		switch (item) {
			case "+": return <ion-label>+</ion-label>
			case "-": return <ion-label>&minus;</ion-label>
			case "*": return <ion-label>&times;</ion-label>
			case "/": return <ion-label>&divide;</ion-label>
			case "_": return <ion-input type="number" autofocus value="" inputMode="numeric" onKeyUp={ e => { if (e.code == "Enter") this.handleSubmit(e) } } ref={(element: HTMLElement | undefined) => this.input = element as HTMLIonInputElement}></ion-input>
			default: return <ion-label>{item}</ion-label>
		}
	}

}
