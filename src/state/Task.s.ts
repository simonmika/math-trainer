import * as model from "../model"

export class Task {
	readonly task: string
	readonly correct: number
	readonly answers: number[] = []
	get answered(): string { return this.task.replace("*", "×").replace("_", this.correct.toString()) }
	get streak(): number {
		return this.answers.reduce((result, answer) => answer == this.correct ? result++ : 0, 0)
	}
	constructor(data: model.Task) {
		this.task = data[0]
		this.correct = data[1]
	}
	verify(answer: number): boolean {
		this.answers.push(answer)
		return this.correct == answer
	}
}
