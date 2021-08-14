import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
	selector: 'app-deficlone',
	templateUrl: './deficlone.component.html',
	styleUrls: ['./deficlone.component.css']
})
export class DeficloneComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

}
