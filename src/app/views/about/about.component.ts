import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	constructor(
    private title: Title,
    private meta: Meta
  ) { }

	ngOnInit(): void {
    this.title.setTitle('About | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'We are a Toronto based Blockchain consulting firm which provides security and infrastructure solutions for Cryptocurrencies as well as Distributed Ledger Technologies for individuals and companies.' });
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

}
