import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	url: any = '';
	constructor(private route: ActivatedRoute) { }
	ngOnInit(): void {

		let data : any = this.route.snapshot;
		this.url = data["_routerState"].url;
		var self = this;
		$(document).ready(function() {
			$(".dropdown").hover(function() {
				var dropdownMenu = $(self).children(".dropdown-menu");
				if (dropdownMenu.is(":visible")) {
					dropdownMenu.parent().toggleClass("open");
				}
			});
		})

	}



}
