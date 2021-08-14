import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
declare var $: any;
import { HomeService } from '../home/home.service';

@Component({
	selector: 'app-softwareservice',
	templateUrl: './softwareservice.component.html',
	styleUrls: ['./softwareservice.component.css']
})
export class SoftwareserviceComponent implements OnInit {
	ourservices: any = [];
	baseUrl: any = environment.BASE_URL;
  constructor(private homeService: HomeService, private sanitizer: DomSanitizer, private title: Title,
    private meta: Meta) { }

	ngOnInit(): void {
    this.title.setTitle('Software Services | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'Airdrop Solutions, Marketing bots, Telegram bots, Blockchain Training, ICO, Smart Contract Audit, Smart Contract, ICO, IDO, IFO Hostings,ERC20, BEP20,  IPFS, Private Blockchain, NFT, Graphic Design, Digital Marketing' });
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
		this.getServices();
    this.loadScripts();


		if(window.location.href.includes("techs")){

			setTimeout(()=>{
				document.getElementById("techs")?.scrollIntoView({
					behavior:"smooth"
				});
			},200)


		}
	}

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

	getServices() {
		this.homeService.getOurservices().subscribe(
			response => {
				this.ourservices = response.data;
			},
			err => {

			}
		);
	}


	sanitizeUrl(url:any){
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}
