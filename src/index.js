import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {userMenu} from "./js/userMenu";
import {courses} from "./js/courses";
import {progress} from "./js/progress";
import {labels} from "./js/labels";
import {inbox} from "./js/inbox";
import {events} from "./js/events";
import {completed} from "./js/completed";


// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		rows: [
			header,
			{
				type: "clean",
				cols: [
					sidebar,
					{
						type: "space",
						rows: [
							{
								margin: 10,
								cols: [
									courses,
									progress,
									labels
								]
							},
							{
								margin: 10,
								cols: [
									inbox,
									events,
									completed
								]
							}
						]
					}
				]
			}
		]
	});

	webix.ui(userMenu);
});
