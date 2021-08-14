import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
import { JobService } from '../jobs/jobs.service';




@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	@ViewChild("message") messageFiled:any;
	@ViewChild("name") nameFiled:any;
	@ViewChild("phone") phoneFiled:any;

	@ViewChild("subject") subjectFiled:any;
	@ViewChild("email") emailFiled:any;

	phone: String = "";
	email: String = "";
	fullName: String = "";
	subject: String = "";
	message: String = "";

	emailError:String =""
	phoneError:String =""
	fullNameError:String =""
	subjectError:String =""
	messageError:String =""
	load:Boolean =false

  constructor(private jobService: JobService,
    private title: Title,
    private meta: Meta) {
     }

	ngOnInit(): void {
    this.title.setTitle('Contact | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'Blockchain queries, Startup ideas, Blockchain Project, Crypto Project queries' });
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
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

		//implement API here.


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

}
