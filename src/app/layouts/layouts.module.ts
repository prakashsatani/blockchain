import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../views/home/home.component';
import { OurstoryComponent } from '../views/ourstory/ourstory.component';
import { ClientpartnerComponent } from '../views/clientpartner/clientpartner.component';
import { AboutComponent } from '../views/about/about.component';
import { SoftwareserviceComponent } from '../views/softwareservice/softwareservice.component';
import { ExchangecloneComponent } from '../views/exchangeclone/exchangeclone.component';
import { DeficloneComponent } from '../views/deficlone/deficlone.component';
import { UniswapCloneComponent } from '../views/uniswap-clone/uniswap-clone.component';
import { InvestorRelationsComponent } from '../views/investor-relations/investor-relations.component';
import { CareerComponent } from '../views/career/career.component';
import { LearningDevelopmentComponent } from '../views/learning-development/learning-development.component';
import { JobsComponent } from '../views/jobs/jobs.component';
import { JobPreviewComponent } from '../views/job-preview/job-preview.component';
import { ContactComponent } from '../views/contact/contact.component';
import { NewsBlogComponent } from '../views/news-blog/news-blog.component';
import { NewsBlogPreviewComponent } from '../views/news-blog-preview/news-blog-preview.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OpenseaCloneComponent } from '../views/opensea-clone/opensea-clone.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ServicePreviewComponent } from '../views/service-preview/service-preview.component';
import { OurteamComponent } from '../views/ourteam/ourteam.component';

@NgModule({
	imports: [
		CommonModule,
		LayoutsRoutingModule,
		RouterModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		Ng2SearchPipeModule,
		ShareButtonsModule.withConfig({
			debug: true
		}),
		ShareIconsModule
	],
	declarations: [
		HomeComponent,
		OurstoryComponent,
		ClientpartnerComponent,
		AboutComponent,
		SoftwareserviceComponent,
		ExchangecloneComponent,
		DeficloneComponent,
		UniswapCloneComponent,
		InvestorRelationsComponent,
		CareerComponent,
		LearningDevelopmentComponent,
		JobsComponent,
		JobPreviewComponent,
		ContactComponent,
		NewsBlogComponent,
		NewsBlogPreviewComponent,
		OpenseaCloneComponent,
		OurteamComponent,
		ServicePreviewComponent,],
	exports: [

	],
	providers: []

})

export class LayoutsModule { }
