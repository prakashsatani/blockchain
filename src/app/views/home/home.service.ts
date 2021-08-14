import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Router, RouterModule, CanActivate } from '@angular/router';
import { AppHttpService } from 'src/app/_helpers/app-http.service';

@Injectable({
	providedIn: 'root'
})

export class HomeService {

	constructor(private http: HttpClient, public router: Router, private httpService: AppHttpService) {

	}

	getOurservices(): Observable<any> {
		return this.httpService.get('ourservice/getOurservice');
	}

	getOurClients(): Observable<any> {
		return this.httpService.get('ourclient/getOurclient');
	}

	getAwards(): Observable<any> {
		return this.httpService.get('award-recognition/getAwards');
	}

	getNewsBlogs(): Observable<any> {
		return this.httpService.get('news-blog/getNewsBlogs');
	}


}
