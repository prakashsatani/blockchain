import { Component, OnInit } from '@angular/core';
import { ComponentServices } from '../components.service';
import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(private footerService: ComponentServices, private router : Router) { }

  ngOnInit(): void {
    var self = this;
    $(document).ready(function () {
      $(".footer .head").click(function (e:any) {
        var isOpen = $(e.currentTarget).hasClass('active');
        if (isOpen) {
          $(e.currentTarget).removeClass("active");
        }else{
          $(e.currentTarget).addClass("active");
        }
      });
    })
  }

  scrollToAward(element: HTMLElement){
    element.scrollIntoView();

  }

  myFunc() {
    console.log("function called");
    this.router.navigate(['/home'], {queryParams:{rurl: "someId"}})
   }
}
