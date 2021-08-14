import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;

@Component({
	selector: 'app-exchangeclone',
	templateUrl: './exchangeclone.component.html',
	styleUrls: ['./exchangeclone.component.css']
})
export class ExchangecloneComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

	ngOnInit(): void {
    this.title.setTitle('Cryptocurrency Exchange Script | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'Cryptocurrency Exchange Script to build crypto trading exchange. Quick cryptoexchange setup, advanced order book exchange script. Cryptocurrency exchange script binance and coinbase.' });
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

}
