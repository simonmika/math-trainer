import { Named } from "./Named"
import { Task } from "./Task"

export interface Lesson extends Named {
	tasks: Task[]
}
