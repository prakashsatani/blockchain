import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { OurteamService } from './ourteam.service';
declare var $: any;

@Component({
	selector: 'app-ourteam',
	templateUrl: './ourteam.component.html',
	styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {
	ourTeams: any = [];
	baseUrl: any = environment.BASE_URL;
  constructor(private ourteamService: OurteamService, private sanitizer: DomSanitizer, private route: ActivatedRoute, private title: Title,
    private meta: Meta) { }

	ngOnInit(): void {
    this.title.setTitle('Our Team | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'Cloud Architect, Blockchain Architect, Blockchain Developers, Devops Engineers, Automation' });
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
		this.getOurTeams();
	}


	getOurTeams() {
		this.ourteamService.getOurTeams().subscribe(
			response => {
				this.ourTeams = response.data;
			},
			err => {

			}
		);
	}

	sanitizeUrl(url:any){
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}
