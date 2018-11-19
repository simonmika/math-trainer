export class Store<T extends Store<T, S>, S> {
	constructor(readonly update: (next: T) => void, protected readonly data: S) { }
}
