import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { JobService } from './jobs.service';
declare var $: any;

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

	constructor(private jobService: JobService, private sanitizer: DomSanitizer) { }
	allJobs: any = [];
	ngOnInit(): void {
		this.getJob();
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

	getJob() {
		this.jobService.getJobs().subscribe(
			response => {
				this.allJobs = response.data;
			},
			err => {

			}
		);
	}
}

