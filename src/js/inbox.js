import {dataInbox} from "../data/dataInbox";

let mailbox = (obj, common, val) => `<span class="webix_table_checkbox mailbox pointer mdi mdi-18px ${val ? "mdi-email-open" : "mdi-email"}"></span>`;

export const inbox = {
	gravity: 1.8,
	rows: [
		{
			view: "toolbar",
			padding: {left: 15},
			cols: [
				{
					view: "label",
					label: "Inbox"
				}
			]
		},
		{
			view: "datatable",
			scroll: true,
			select: true,
			checkboxRefresh: true,
			columns: [
				{id: "status", header: "", width: 38, template: mailbox},
				{id: "subject", header: "Subject", minWidth: 250, fillspace: true},
				{id: "from", header: "From", minWidth: 130, fillspace: true},
				{id: "recieved", header: "Recieved", width: 110}
			],
			data: dataInbox
		}
	]
};
