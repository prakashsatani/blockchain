import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SafeResourceUrl,  DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
declare var $: any;
import { HomeService } from './home.service';
import { JobService } from '../jobs/jobs.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private homeService: HomeService,private route : ActivatedRoute, private jobService: JobService, private sanitizer: DomSanitizer) { }


	@ViewChild("message") messageFiled:any;
	@ViewChild("name") nameFiled:any;
	@ViewChild("phone") phoneFiled:any;

	@ViewChild("subject") subjectFiled:any;
	@ViewChild("email") emailFiled:any;
	ourservices: any = [];
	ourClients: any = [];
	newsBlogs: any = [];
	awards: any = [];
	baseUrl: any = environment.BASE_URL;
	phone: String = "";
	email: String = "";
	fullName: String = "";
	subject: String = "";
	message: String = "";
	load:Boolean =false
	emailError:String =""
	phoneError:String =""
	fullNameError:String =""
	subjectError:String =""
	messageError:String =""
	vad:String =""
	ngOnInit(): void {



		this.loadScripts();
		this.getServices();
		this.getOurClients();
		this.getAwards();
		this.getNewsBlogs();
		var self = this;
		// $(function() {
		// alert(window.location.pathname.split("/")[1]);
		// if (window.location.pathname.split("/")[1] === "home") {
		var header = $(".navbar");


		console.log("header");
		console.log(header);

		$(window).scroll(function () {


			if (window.location.pathname.split("/")[1] === "home" || window.location.pathname.split("/")[1] === "") {
				header.removeClass("bg-navbar");
				header.removeClass("shadow bg-white rounded");
				var scroll = $(window).scrollTop();
				if (scroll > 80) {
					// alert("in");
					header.addClass("bg-navbar");
					header.addClass("shadow bg-white rounded");
				} else {
					// alert("out");
					header.removeClass("bg-navbar");
					header.removeClass("shadow bg-white rounded");
				}
			}





		});
		// }
		// });

		if(window.location.href.includes("awards")){


			setTimeout(()=>{
				document.getElementById("awards")?.scrollIntoView();
			},200)


		}


	}


	// Method to dynamically load JavaScript
	loadScripts() {
		// This array contains all the files/CDNs

		const dynamicScripts = [
      'assets/js/owl.carousel.min.js',
      'assets/js/scripts.js',
		];
		for (let i = 0; i < dynamicScripts.length; i++) {
			const node = document.createElement('script');
			node.src = dynamicScripts[i];
			node.type = 'text/javascript';
			node.async = false;
			document.getElementsByTagName('head')[0].appendChild(node);
		}
	}
  awardSlider(){
    var awardSlider = $('#awardrecognition');
    setTimeout(function () {
      awardSlider.owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          }
        }
      })
    }, 1000);

    $('.slider__control_right').click(function () {
      awardSlider.trigger('next.owl.carousel');
    })

    $('.slider__control_left').click(function () {
      awardSlider.trigger('prev.owl.carousel', [300]);
    })

    var testimonialSlider = $('#testimonialSlider');
    setTimeout(function () {
    testimonialSlider.owlCarousel({
      loop: true,
      margin: 10,
      center: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 5,
        },
        600: {
          items: 5,
        },
        1000: {
          items: 5,
        }
      }
    });
    }, 1000);
  }
	getNewsBlogs(rerender = true) {
		this.homeService.getNewsBlogs().subscribe(
			response => {
				if (response.data?.length > 2) {
          var list  = response.data.reverse();
          this.newsBlogs = list.slice(Math.max(response.data.length - 3, 0));
				} else {
          this.newsBlogs = response.data.reverse();
				}
			},
			err => {
			}
		);
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

	getOurClients(rerender = true) {
		this.homeService.getOurClients().subscribe(
			response => {
				this.ourClients = response.data;
			},
			err => {

			}
		);
	}

	getAwards(rerender = true) {
		this.homeService.getAwards().subscribe(
			response => {
				var self = this;
				this.awards = response.data;
				console.log(this.awards);
        this.awardSlider()
			},
			err => {

			}
		);
	}

	getAwardLink(data:any){
		//console.log(data);

		if(data){
			return data;
		}else{
			return "http://52.66.175.28:3001/"
		}
	}

	removeTags(str: any) {
		if ((str === null) || (str === ''))
			return false;
		else
			str = str.toString();
		return str.replace(/(<([^>]+)>)/ig, '');
	}

	onClicForm() {

		if (this.fullName == "") {
			this.fullNameError = "Please enter Name"
			this.emailError=""
			this.phoneError=""
			this.subjectError=""
			this.emailError=""
			return
		}

		if (this.phone == "") {
			this.fullNameError = ""
			this.emailError=""
			this.phoneError="Please enter mobile number"
			this.subjectError=""
			this.messageError=""
			return
		}

		if (!/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(this.phone + "")) {
			this.fullNameError = ""
			this.emailError=""
			this.phoneError="Please enter valid mobile number"
			this.subjectError=""
			this.messageError=""
			return
		}

		if (this.email === "") {
			this.fullNameError = ""
			this.emailError="Please enter email id"
			this.phoneError=""
			this.subjectError=""
			this.messageError=""
			return
		}

		if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.email + "")) {
			this.fullNameError = ""
			this.emailError="Please enter valid email id"
			this.phoneError=""
			this.subjectError=""
			this.messageError=""
			return
		}
		if (this.subject == "") {
			this.fullNameError = ""
			this.emailError=""
			this.phoneError=""
			this.subjectError="Please enter subject."
			this.messageError=""
			return
		}


		if (this.message == "") {
			this.fullNameError = ""
			this.emailError=""
			this.phoneError=""
			this.subjectError=""
			this.messageError="Please enter message."
			return
		}

		this.fullNameError = ""
		this.emailError=""
		this.phoneError=""
		this.subjectError=""
		this.messageError=""

		let data ={
			"from":this.email,
			"subject":this.subject,
			"body":"Hi, \n\nNew Request is raised.\n\nName: "+this.fullName+"\n\nMobile Number: "+this.phone+"\n\nEmail: "+this.email+"\n\nMessage: "+this.message
		}


		this.load = true
		this.jobService.contactUs(data).subscribe(
			response => {
				console.log(data);
				this.email = ""
				this.fullName = ""
				this.phone = ""
				this.subject = ""
				this.message = ""

				this.load = false;
				this.messageFiled.nativeElement.value = ''
				this.subjectFiled.nativeElement.value = ''
				this.nameFiled.nativeElement.value = ''
				this.phoneFiled.nativeElement.value = ''
				this.emailFiled.nativeElement.value = ''
				this.messageError = "Mail Send Successfully."
			},
			err => {
				this.load = false
				this.messageError = "Unable to send mail. Please try again."
				console.log(err);
			}
		);


	}

	onKey(event: any, status: any) {
		switch (status) {
			case 1:
				this.fullName = event.target.value
				break;
			case 2:
				this.phone = event.target.value
				break;
			case 3:
				this.email = event.target.value
				break;
			case 4:
				this.subject = event.target.value
				break;
			case 5:
				this.message = event.target.value
				break;
			default:
				break;
		}


	}


	sanitizeUrl(url:any){
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}

