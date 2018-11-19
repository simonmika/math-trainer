import * as model from "../model"

import { Task } from "./Task.s"

export class Lesson {
	private currentIndex = 0
	get current(): Task { return this.tasks[this.currentIndex] }
	constructor(readonly name: string, readonly tasks: Task[]) { }
	next(): boolean {
		this.currentIndex = (this.currentIndex + 1) % this.tasks.length
		return true
	}
	verify(answer: number): boolean {
		return this.current.verify(answer) && this.next()
	}
	static open(data: model.Lesson | undefined): Lesson | undefined {
		return data && new Lesson(data.name, data.tasks.map(d => new Task(d)))
	}
	static async load(url: string): Promise<Lesson | undefined> {
		return Lesson.open(await (await fetch(url)).json() as model.Lesson | undefined)
	}
}
