import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
	selector: 'app-layouts',
	templateUrl: './layouts.component.html',
	styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {
	loggedRole: any;

	constructor() { }

	ngOnInit(): void {
		var Tawk_API: any = Tawk_API || {}, Tawk_LoadStart = new Date();
		(function() {
			var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
			s1.async = true;
			s1.src = 'https://embed.tawk.to/60c80a7c7f4b000ac0379da0/1f86mhup2';
			s1.charset = 'UTF-8';
			s1.setAttribute('crossorigin', '*');
			s0.parentNode!.insertBefore(s1, s0);
		})();

	}

}
