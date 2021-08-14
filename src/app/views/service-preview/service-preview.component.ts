import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ServicePreviewService } from './service-preview.service';
declare var $: any;

@Component({
	selector: 'app-service-preview',
	templateUrl: './service-preview.component.html',
	styleUrls: ['./service-preview.component.css']
})

export class ServicePreviewComponent implements OnInit {
	serviceId: any = '';
  serviceKey: any = '';
	serviceData: any = '';
	serviceDataFile: any = [];
	baseUrl: any = environment.BASE_URL;
	jpgType: any = "image/jpeg";
	pngType: any = "image/png";
	constructor(private servicePreviewService: ServicePreviewService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
		route.params.subscribe(
			(params) => {
        this.serviceKey = params['id'];
			});
	}

	ngOnInit(): void {
		this.fetchService();
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

	fetchService() {
    const data = {
      key: this.serviceKey
    }
    this.servicePreviewService.fetchOurservice(data).subscribe(
			response => {
				this.serviceData = response.data;
				if (response.data.description == null || response.data.description == '' || response.data.description == undefined) {
					$('#descriptionService').html("<h4 class='text-center'>No Description Available</h4>");
				} else {
					$('#descriptionService').html(response.data.description);
				}
				var file = this.serviceData.logo;
				for (var i = 0; i < file.length; i++) {
					// if (file[i].mimetype == this.jpgType || file[i].mimetype == this.pngType) {
						this.serviceDataFile.push(file[i]);
					// }
				}
				setTimeout(function() {
					$('[id*=carousel-item-]').removeClass('active');
					$('#carousel-item-0').addClass('active');
				}, 1000);

			},
			err => {

			}
		);
	}
	sanitizeUrl(url:any){
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}


