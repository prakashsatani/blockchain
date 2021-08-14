import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Router, RouterModule, CanActivate } from '@angular/router';
import { AppHttpService } from 'src/app/_helpers/app-http.service';

@Injectable({
	providedIn: 'root'
})

export class OurteamService {

	constructor(private http: HttpClient, public router: Router, private httpService: AppHttpService) {

	}

	getOurTeams(): Observable<any> {
		return this.httpService.get('ourTeam/getOurTeam');
	}

}
