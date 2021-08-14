import { Injectable } from '@angular/core';
import { AppHttpService } from '../_helpers/app-http.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class ComponentServices {
	// private  schoolheaders = {Authorization: 'bearer ' + environment.SCHOOL_API_KEY};
	constructor(private httpService: AppHttpService) { }

}
