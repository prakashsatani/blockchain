import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindJobComponent } from './views/jobs/find-job/find-job.component';

// import { LayoutComponent } from './layout';

// const APP_LAYOUT = [
//   LayoutComponent
// ];

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    FindJobComponent,
    // LoginComponent,
    // ...APP_LAYOUT,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
