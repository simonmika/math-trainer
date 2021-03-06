import { Component, State } from "@stencil/core"

@Component({
	tag: "mt-categories",
	styleUrl: "mt-categories.css",
})
export class MtCategories {
	@State() state: { name: string, url: string }[] = []

	async componentWillLoad() {
		const answer = await (await fetch(`/api/lessons/index.json`)).json() as { name: string, url: string }[] | undefined
		if (answer)
			this.state = answer
	}
	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="../" />
					</ion-buttons>
					<ion-title>Categories</ion-title>
				</ion-toolbar>
			</ion-header>,
			<ion-content padding>
				{
					this.state.map(category =>
						<ion-item href={document.URL + category.url.slice(1)}>
							<ion-icon name="book" slot="start"></ion-icon>
							<ion-label>{category.name}</ion-label>
							<ion-icon name="arrow-forward" slot="end"></ion-icon>
						</ion-item>
					)
				}
			</ion-content>,
		]
	}
}
