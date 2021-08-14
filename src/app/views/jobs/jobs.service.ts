import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Router, RouterModule, CanActivate } from '@angular/router';
import { AppHttpService } from 'src/app/_helpers/app-http.service';

@Injectable({
	providedIn: 'root'
})

export class JobService {

	constructor(private http: HttpClient, public router: Router, private httpService: AppHttpService) {

	}

	getJobs(): Observable<any> {
		return this.httpService.get('job/getJobs');
	}

	fetchJob(id: any): Observable<any> {
		return this.httpService.get('job/fetchJob/' + id);
	}

	submitJob(data: any): Observable<any> {
		return this.httpService.post('appliedjob/submitJob', data);
	}

	uploadFile(data: any, id: any): Observable<any> {
		return this.httpService.post('job/uploadFile/' + id, data);
	}


	contactUs(data: any): Observable<any> {
		return this.httpService.post('contactus', data);
	}

}
