import {dataSidebar} from "../data/dataSidebar";

export const sidebar = {
	view: "sidebar",
	css: "webix_dark",
	select: true,
	width: 204,
	data: dataSidebar,
	ready() {
		this.select(1);
	}
};
