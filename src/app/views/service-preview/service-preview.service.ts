import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Router, RouterModule, CanActivate } from '@angular/router';
import { AppHttpService } from 'src/app/_helpers/app-http.service';

@Injectable({
	providedIn: 'root'
})

export class ServicePreviewService {

	constructor(private http: HttpClient, public router: Router, private httpService: AppHttpService) {

	}

	fetchOurservice(data: any): Observable<any> {
    return this.httpService.post('ourservice/fetchOurserviceByKey', data);
	}

}
