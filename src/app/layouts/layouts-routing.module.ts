import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
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
import { OpenseaCloneComponent } from '../views/opensea-clone/opensea-clone.component';
import { ServicePreviewComponent } from '../views/service-preview/service-preview.component';
import { OurteamComponent } from '../views/ourteam/ourteam.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'our-story',
    component: OurstoryComponent,
  },

  {
    path: 'our-team',
    component: OurteamComponent,
  },

  {
    path: 'client-partner',
    component: ClientpartnerComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'software-service',
    component: SoftwareserviceComponent,
  },

  {
    path: 'exchange-clone',
    component: ExchangecloneComponent,
  },

  {
    path: 'defi-clone',
    component: DeficloneComponent,
  },

  {
    path: 'opensea-clone',
    component: OpenseaCloneComponent,
  },

  {
    path: 'uniswap-clone',
    component: UniswapCloneComponent,
  },

  {
    path: 'investor-relations',
    component: InvestorRelationsComponent,
  },

  {
    path: 'careers',
    component: CareerComponent,
  },

  {
    path: 'learning-development',
    component: LearningDevelopmentComponent,
  },

  {
    path: 'jobs',
    component: JobsComponent,
  },

  {
    path: 'jobs/:id',
    component: JobPreviewComponent,
  },
  {
    path: 'service/:id',
    component: ServicePreviewComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'news-updates',
    component: NewsBlogComponent,
  },
  {
    path: 'news-updates/:id',
    component: NewsBlogPreviewComponent,
  },

  { path: '**', redirectTo: 'login' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }