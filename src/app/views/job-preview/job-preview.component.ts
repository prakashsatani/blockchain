import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { JobService } from '../jobs/jobs.service';
declare var $: any;

@Component({
	selector: 'app-job-preview',
	templateUrl: './job-preview.component.html',
	styleUrls: ['./job-preview.component.css']
})

export class JobPreviewComponent implements OnInit {
	newsJobId: any = '';
	newsJobData: any = '';
	filesToUpload: Array<File> = [];
	fname = new FormControl('', Validators.required);
	email = new FormControl('', Validators.required);
	file = new FormControl('', Validators.required);
	phone = new FormControl('');
	lname = new FormControl('');
	constructor(private jobService: JobService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
		route.params.subscribe(
			(params) => {
				this.newsJobId = params['id'];
			});

	}

	ngOnInit(): void {
		this.fetchJob();
		$('#emailPatternRequired').hide();
		$('#phoneRequired').hide();
		$('#alertSuccess').hide();
		$('#alertError').hide();
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");

	}

	fetchJob() {
		this.jobService.fetchJob(this.newsJobId).subscribe(
			response => {
				this.newsJobData = response.data;
				$('#descriptionJob').html(response.data.description);
				$('#aboutJob').html(response.data.about_job);
				$('#requirements').html(response.data.requirements);
				$('#aboutUs').html(response.data.about_us);
				$('#address').html(response.data.address);
			},
			err => {

			}
		);
	}


	fileChangeEvent(fileInput: any) {
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

	isNumber(evt: any) {
		var charCode = (evt.which) ? evt.which : evt?.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		} else if (this.phone.value.length > 9) {
			return false;
		}

		return true;
	}

	triggerModal() {
		$('#applyJob').modal('show');
		this.fname = new FormControl('');
		this.lname = new FormControl('');
		this.phone = new FormControl('');
		this.email = new FormControl('');
		this.file = new FormControl('');
		$('#emailPatternRequired').hide();
		$('#phoneRequired').hide();
		$('#alertSuccess').hide();
		$('#alertError').hide();
	}

	upload(id: any) {
		const formData: any = new FormData();
		const files: Array<File> = this.filesToUpload;
		for (let i = 0; i < files.length; i++) {
			formData.append("image", files[i], files[i]['name']);
		}
		this.jobService.uploadFile(formData, id).subscribe(
			data => {
				$('#alertSuccess').show();
				$('#alertError').hide();
				setTimeout(function() {
					$('#applyJob').modal('hide');
				}, 1500);
			},
			err => {
				$('#alertError').show();
			}
		);
	}

	submit() {
		var emailaddressVal = this.email.value;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var phoneNo = this.phone.value;
		if (emailReg.test(emailaddressVal) && phoneNo.length == 10) {
			var jobData = {
				fname: this.fname.value,
				lname: this.lname.value,
				phone: this.phone.value,
				email: this.email.value,
				job_name: this.newsJobData.title,
				job_id: this.newsJobData._id,
			};
			$('#emailPatternRequired').hide();
			this.jobService.submitJob(jobData).subscribe(
				data => {
					this.upload(data.id);
				},
				err => {
					$('#alertSuccess').hide();
					$('#alertError').show();
				}
			);
		} else {
			if (phoneNo.length < 10 || phoneNo.length > 10) {
				$('#emailPatternRequired').hide();
				$('#phoneRequired').show();
			} else {
				$('#emailPatternRequired').show();
				$('#phoneRequired').hide();
			}

		}

	}


}

