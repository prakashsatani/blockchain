import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;

@Component({
	selector: 'app-investor-relations',
	templateUrl: './investor-relations.component.html',
	styleUrls: ['./investor-relations.component.css']
})
export class InvestorRelationsComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

	ngOnInit(): void {
    this.title.setTitle('Investor Relation | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'Crypto Investing, ERC20 Tokens, Cryptocurrency, Multibagger Crypto Assets, Digital tokens.' });
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

}
