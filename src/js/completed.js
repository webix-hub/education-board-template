import {dataCompleted} from "../data/dataCompleted";

export const completed = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 15},
			cols: [
				{
					view: "label",
					label: "Completed"
				}
			]
		},
		{
			view: "datatable",
			scroll: true,
			columns: [
				{id: "course", header: "Course", minWidth: 180, fillspace: true},
				{id: "completed", header: "Completed", width: 110},
				{id: "score", header: "Score", width: 70, template: "<div class='completedScore'><span class='scoreLabel #color#'>#score#</span></div>'"}
			],
			data: dataCompleted
		}
	]
};
