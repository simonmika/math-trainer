import { Named } from "./Named"

export interface Category extends Named {
	lessons: { name: string, url: string }[]
}
