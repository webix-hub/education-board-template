import {dataProgress} from "../data/dataProgress";

export const progress = {
	type: "clean",
	rows: [
		{
			view: "toolbar",
			padding: {top: 30, bottom: 0},
			rows: [
				{
					view: "label",
					label: "My progress",
					align: "center"
				}
			]
		},
		{
			view: "scrollview",
			scroll: "auto",
			body: {
				rows: [
					{
						view: "chart",
						css: "progress",
						width: 439,
						height: 348,
						type: "donut",
						padding: {top: 38, left: 0, right: 0, bottom: 0},
						legend: {
							layout: "x",
							padding: 15,
							toggle: false,
							values: [
								{text: "This month", color: "#8664C6"},
								{text: "Last month", color: "#1CA1C1"}
							],
							marker: {type: "round", width: 8, height: 8},
							valign: "top",
							align: "left"
						},
						series: [
							{
								innerRadius: 100,
								radius: 145,
								value: "#progress#",
								color: "#color#",
								pieInnerText(obj) {
									if (obj.color !== "#EDEFF0") return obj.progress;
									return false;
								}
							},
							{
								radius: 70,
								innerRadius: 30,
								value: "#progress2#",
								color: "#color2#",
								pieInnerText(obj) {
									if (obj.color2 !== "#EDEFF0") return obj.progress2;
									return false;
								}
							}
						],
						data: dataProgress
					}
				]
			}
		}
	]
};
