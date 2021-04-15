import {dataLabels} from "../data/dataLabels";

export const labels = {
	type: "clean",
	rows: [
		{
			view: "toolbar",
			padding: {top: 30, bottom: 25},
			rows: [
				{
					view: "label",
					label: "My labels",
					align: "center"
				}
			]
		},
		{
			view: "dataview",
			css: "labels",
			type: {
				width: 144,
				height: 130
			},
			template: "<div class='labelImg'><img src='./labels/#label#'/></div>",
			data: dataLabels
		}
	]
};
