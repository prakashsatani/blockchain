import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;

@Component({
	selector: 'app-opensea-clone',
	templateUrl: './opensea-clone.component.html',
	styleUrls: ['./opensea-clone.component.css']
})
export class OpenseaCloneComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

	ngOnInit(): void {
    this.title.setTitle('Opensea Clone Script | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'NFT non-fungible token, ERC721, Digital Tokens,  Digital Ledger, Digital assets , cryptocurrency' });
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

}
