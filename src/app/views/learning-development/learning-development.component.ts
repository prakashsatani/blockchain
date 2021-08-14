import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
	selector: 'app-learning-development',
	templateUrl: './learning-development.component.html',
	styleUrls: ['./learning-development.component.css']
})
export class LearningDevelopmentComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

}
