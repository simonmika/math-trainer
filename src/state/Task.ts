import * as model from "../model"

import { Store } from "./Store"

interface TaskData {
	readonly task: string
	readonly correct: number
	readonly answers: number[]
}

export class Task extends Store<Task, TaskData> {
	get task(): string { return this.data.task }
	get correct(): number { return this.data.correct }
	get answers(): number[] { return this.data.answers }
	get answered(): string { return this.task.replace("*", "×").replace("_", this.correct.toString()) }
	get streak(): number {
		return this.answers.reduce((result, answer) => answer == this.correct ? result++ : 0, 0)
	}
	constructor(update: (task: Task) => void, data: TaskData) {
		super(update, data)
	}
	verify(answer: number): boolean {
		this.answers.push(answer)
		return this.correct == answer
	}
	static load(update: (task: Task) => void, data: model.Task): Task {
		return new Task(update, { task: data[0], correct: data[1], answers: [] })
	}
}
