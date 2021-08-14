import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
	selector: 'body',
	template: '<router-outlet></router-outlet>',
})
export class AppComponent {
	title = 'Blockchainmind';

	constructor(private token: TokenStorageService) { }


}
