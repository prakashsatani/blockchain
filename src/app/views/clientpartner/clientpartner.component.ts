import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
declare var $: any;
import { HomeService } from '../home/home.service';

@Component({
	selector: 'app-clientpartner',
	templateUrl: './clientpartner.component.html',
	styleUrls: ['./clientpartner.component.css']
})
export class ClientpartnerComponent implements OnInit {
	slideIndexClient: any = 1;
	slideIndexPartner: any = 1;
	ourClients: any = 1;
	baseUrl: any = environment.BASE_URL;
  constructor(private homeService: HomeService, private sanitizer: DomSanitizer, private title: Title,
    private meta: Meta) { }

	ngOnInit(): void {
    this.title.setTitle('Clients and Partners | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'Ethereum, AWS, Polygon (Matic)' });
		this.loadScripts();
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
		this.getOurClients();
	}

	// Method to dynamically load JavaScript
	loadScripts() {
		// This array contains all the files/CDNs
		const dynamicScripts = [
			'assets/js/scripts.js'
		];
		for (let i = 0; i < dynamicScripts.length; i++) {
			const node = document.createElement('script');
			node.src = dynamicScripts[i];
			node.type = 'text/javascript';
			node.async = false;
			document.getElementsByTagName('head')[0].appendChild(node);
		}
	}

	getOurClients(rerender = true) {
		this.homeService.getOurClients().subscribe(
			response => {
				this.ourClients = response.data;
			},
			err => {

			}
		);
	}


	sanitizeUrl(url:any){
    // const finalUrl = 'https://api.blockchainmind.com/upload/' +url;
    return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}
