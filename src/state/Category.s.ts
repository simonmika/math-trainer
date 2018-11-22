/* import * as model from "../model"

import { Lesson } from "./Lesson.s"

export class Category {
	constructor(readonly name: string, readonly lessons: Lesson[]) { }
	static open(data: model.Named[] | undefined): Category | undefined {
		return data && new Category(data.name, data.tasks.map(d => new Lesson(d)))
	}
	static async load(url: string): Promise<Category | undefined> {
		return Category.open(await (await fetch(url)).json() as model.Lesson | undefined)
	}
}
 */
