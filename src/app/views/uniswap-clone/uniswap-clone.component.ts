import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
	selector: 'app-uniswap-clone',
	templateUrl: './uniswap-clone.component.html',
	styleUrls: ['./uniswap-clone.component.css']
})
export class UniswapCloneComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

}
