import * as model from "../model"

import { Store } from "./Store"
import { Task } from "./Task.s"

interface LessonData {
	readonly name: string
	readonly tasks: Task[]
	readonly currentIndex: number
}

export class Lesson extends Store<Lesson, LessonData> {
	get name(): string { return this.data.name }
	get tasks(): Task[] { return this.data.tasks }
	get current(): Task { return this.data.tasks[this.data.currentIndex] }
	constructor(update: (next: Lesson) => void, data: LessonData = { name: "", tasks: [], currentIndex: 0 }) {
		super(update, data)
	}
	verify(answer: number): boolean {
		return this.current.verify(answer) && this.next()
	}
	next(): boolean {
		this.update(new Lesson(this.update, { ...this.data, currentIndex: (this.data.currentIndex + 1) % this.tasks.length }))
		return true
	}
	open(data: model.Lesson | undefined): Lesson {
		const result = new Lesson(this.update, { ...this.data, name: data && data.name || "", tasks: data && data.tasks.map(d => new Task(d)) || [] })
		this.update(result)
		return result
	}
	async load(url: string): Promise<Lesson> {
		return this.open(await (await fetch(url)).json() as model.Lesson | undefined)
	}
	static create(update: (next: Lesson) => void) {
		return new Lesson(update)
	}
}
