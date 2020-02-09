
import { NavApiService } from './nav-api.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export class NavBar{
    question_id: number;
    questions_name: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard',  title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  { path: '/java/:id', title: 'java',  icon:'content_paste', class: '' },
  { path: '/tyuser-pography', title: 'Typography',  icon:'library_books', class: '' },
  { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  { path: '/notifications',title: 'Notifications',  icon:'notifications', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mSources:Array<any>;
  mArticles:Array<any>;
  menuItems:Array<any>;
	data: any = {};


sub;
id;

  constructor(
    private _Activatedroute:ActivatedRoute,
    private navService:NavApiService,
    private authService:AuthenticationService,
    private router:Router) {

    }

    ngOnInit(){

      this.sub=this._Activatedroute.paramMap.subscribe(params => { 
        console.log(params);
         this.id = params.get('id'); 
         //let products=this._productService.getProducts();
         //this.product=products.find(p => p.productID==this.id);    
     });




      //this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.navService.getQuestions().subscribe(data => 
			{
		    console.log(data);
		    this.menuItems = data;
	  });


      this.navService.initArticles().subscribe(data => this.mArticles = data['articles']);


      //this.navService.initSources().subscribe(data=> this.mSources = data['sources']);


    }
    searchArticles(source){
      console.log("selected source is: "+source);
      this.navService.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
    }

    logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
  }
  


}

