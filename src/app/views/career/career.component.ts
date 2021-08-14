import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
@Component({
	selector: 'app-career',
	templateUrl: './career.component.html',
	styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
    ) { }

	ngOnInit(): void {
    this.title.setTitle('Careers | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'BlockchainMind is driving the evolution and adoption of digital assets by giving people access to crypto in a way that is safe, compliant, and trusted. View Jobs. Careers ...' });
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

}
