import {dataEvents} from "../data/dataEvents";

export const events = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 15},
			cols: [
				{
					view: "label",
					label: "Recent Events"
				}
			]
		},
		{
			view: "datatable",
			scroll: true,
			header: false,
			rowHeight: 65,
			columns: [
				{id: "date", width: 108, template: "<div class='eventDate'><span>#date#</span><span class='eventTime'>#time#</span></div>"},
				{id: "label", width: 48, template: "<div class='eventLabel'><img src='./events/#label#' /></div>"},
				{id: "message", minWidth: 265, fillspace: true}
			],
			data: dataEvents
		}
	]
};
