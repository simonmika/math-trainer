import { Component, State } from "@stencil/core"

@Component({
	tag: "mt-categories",
	styleUrl: "mt-categories.css",
})
export class MtCategories {
	@State() state = false

	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button defaultHref="/" />
					</ion-buttons>
					<ion-title>Categories</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content padding>
				<ion-card>
					<ion-card-header>
						<ion-card-subtitle>Card Subtitle</ion-card-subtitle>
						<ion-card-title>Card Title</ion-card-title>
					</ion-card-header>
						<ion-item href="/start">
						<ion-icon name="book" slot="start"></ion-icon>
						<ion-label>Category Name</ion-label>
					</ion-item>
				</ion-card>
			</ion-content>,
		]
	}
}
