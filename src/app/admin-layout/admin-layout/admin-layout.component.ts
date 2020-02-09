import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private authenticationService : AuthenticationService,
    private userService : UserService
  ) { 
    this.currentUserSubscription=this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      } 
    )
  }

  ngOnInit() {
  }


  

}
