import { Component } from "@stencil/core"

@Component({
	tag: "app-home",
	styleUrl: "app-home.css",
})
export class AppHome {

	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-title>Math Trainer</ion-title>
				</ion-toolbar>
			</ion-header>,
			<ion-content padding>
				<ion-button href="/lessons" expand="block">Lessons</ion-button>
				<ion-button href="/lessons/multiplication/full" expand="block">Multiplication</ion-button>
				<ion-button href="/profile/ionic" expand="block">Profile</ion-button>
			</ion-content>,
		]
	}
}
