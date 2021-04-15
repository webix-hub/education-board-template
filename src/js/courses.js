import {dataCourses} from "../data/dataCourses";

export const courses = {
	gravity: 1.8,
	rows: [
		{
			view: "toolbar",
			padding: {left: 15},
			cols: [
				{
					view: "label",
					label: "Enrolled"
				}
			]
		},
		{
			view: "datatable",
			css: "coursesTable",
			scroll: true,
			rowHeight: 96,
			type: {
				starsTemplate(obj) {
					let html = [];
					for (let star = 0; star < 5; star++) {
						if (star < obj.rating) html.push('<span class="webix_icon mdi mdi-star starFull"></span>');
						else html.push('<span class="webix_icon mdi mdi-star starEmpty"></span>');
					}
					return html.join("");
				},
				coursesCol(obj, common) {
					const html = `
                        <div class="coursesItem">
                            <div class="coursesRating">${common.starsTemplate(obj)}</div>
                            <span class="coursesTitle">${obj.title}</span>
                            <span class="coursesPeriod">
                                <span>${obj.start} - ${obj.finish}</span>
                            </span>
                        </div>
                    `;
					return html;
				},
				completeCol(obj) {
					const html = `
                        <div class="completeWrapp">
                            <span class="completeBar" style="width:${obj.complete}%"></span>
                        </div>
                        <div class="completeVal">${obj.complete}%</div>
                    `;
					return html;
				}
			},
			columns: [
				{id: "image", header: "Title", width: 96, template: "<img src='./courses/#image#'>"},
				{id: "title", header: "", minWidth: 230, fillspace: true, template: "{common.coursesCol()}"},
				{id: "complete", header: "Complete", minWidth: 140, fillspace: true, template: "{common.completeCol()}", css: "completeCol"},
				{id: "button", header: "", width: 130, template: "<input class='webix_button' type='button' value='View course'>", css: "buttonCol"}
			],
			data: dataCourses
		}
	]
};
