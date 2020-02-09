import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../Services/authentication.service';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models/user';


@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    private currentUserSubject: BehaviorSubject<User>;



    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        //private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        if (this.loginForm.invalid) {
          return;
        }
        const body = new HttpParams()
          .set('username', this.loginForm.controls.username.value)
          .set('password', this.loginForm.controls.password.value)
          .set('grant_type', 'password');
    
        this.authenticationService.login(body.toString()).pipe(first())
        .subscribe(
            data => {
                this.router.navigate(   [this.returnUrl]);
            },
            error => {
                console.log(error); 
            });
        
        
        /*.subscribe(data => {
          window.sessionStorage.setItem('token', JSON.stringify(data));
          console.log(window.sessionStorage.getItem('token'));
          
          this.router.navigate([this.returnUrl]);
        }, error => {   
            alert(error.error.error_description)
        });

*/

      }


    onSubmit1() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        
        }
      
        const body = new HttpParams()
          .set('username', this.loginForm.controls.username.value)
          .set('password', this.loginForm.controls.password.value)
          .set('grant_type', 'password');

        this.loading = true;
        this.authenticationService.login(body.toString())
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    
                    this.loading = false;
                });
    }
}




/*git add .
git commit -m "Add new Files"
git push --mirror https://github.com/lovebhatia/crack.git

/*import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../Services/authentication.service';
import { HttpParams } from '@angular/common/http';



@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

   
    onSubmit() {
        if (this.loginForm.invalid) {
          return;
        }
        const body = new HttpParams()
          .set('username', this.loginForm.controls.username.value)
          .set('password', this.loginForm.controls.password.value)
          .set('grant_type', 'password');
    
        this.authenticationService.login(body.toString()).subscribe(data => {
          window.sessionStorage.setItem('token', JSON.stringify(data));
          console.log(window.sessionStorage.getItem('token'));
         this.router.navigate(['/']);
                             //this.router.navigate([this.returnUrl]);

        }, error => {
            alert(error.error.error_description)
        });
      }




}
*/