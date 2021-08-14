import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
@Component({
	selector: 'app-ourstory',
	templateUrl: './ourstory.component.html',
	styleUrls: ['./ourstory.component.css']
})
export class OurstoryComponent implements OnInit {

	constructor(
    private title : Title,
    private meta : Meta
  ) { }

	ngOnInit(): void {
    this.title.setTitle('Our Story | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'Blockchain Mind is the leading Blockchain consultancy firm in Canada. Our team background contains more than 20 years of combined experience in Cyber Security, Network Design, Information Security, Software Development, and manufacturing.' });

		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

}
