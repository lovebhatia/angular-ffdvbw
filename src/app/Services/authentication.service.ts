import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }



    login(loginPayload) {
        const headers = {
          'Authorization': 'Basic ' + btoa('testjwtclientid:XY7kmzoNzl100'),
          'Content-type': 'application/x-www-form-urlencoded'
        }

        console.log(loginPayload +" "+headers);

        return this.http.post<any>('http://localhost:8083/' + 'oauth/token', loginPayload, {headers})
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if (user && user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log(user.access_token);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
        }));
       
      }



    login1(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}












/*

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";


import { User } from '../_models/user';
import { config } from '../config';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../Services/auth.constant';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    static AUTH_TOKEN = 'http://localhost:8083/oauth/token';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    /*login(username: string, password: string) {
        return this.http.post<any>(`localhost:8083/oauth/token`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }*/


/*
    login(loginPayload) {
        const headers = {
          'Authorization': 'Basic ' + btoa('testjwtclientid:XY7kmzoNzl100'),
          'Content-type': 'application/x-www-form-urlencoded'
        }

        console.log(loginPayload +" "+headers);

        return this.http.post('http://localhost:8083/' + 'oauth/token', loginPayload, {headers})
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
       
      }


    




	 logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

       
}

export interface AuthToken {
    access_token: string,
    token_type: string,
    expires_in: number,
    refresh_token: string,
    scope: Array<string>
}























 /*login(username:string, password:string) {
        return this.http.post<{access_token:  string}>('http://www.your-server.com/auth/login', {username, password}).pipe(tap(res => {
        localStorage.setItem('access_token', res.access_token);
    }))
    }*/


   


   /* login(username: string, password: string) {
        const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;
    
        const headers = new HttpHeaders);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));
    
        const request = this.evidenceService.get().pipe(
            map((res) => res.data)),
            catchError(error => Observable.of(null))
          );
          




        return this.http.post(AuthenticationService.AUTH_TOKEN, body, {headers})
          .pipe(map((res)))
      }



      login1(username: string, password: string) {

        this.getAccessToken(username, password).subscribe(
            response => {
                // ...any login logic- cookies and all the good stuff goes here
               // this.isLoggedIn = true; 
                console.log(response);
            },
            error => {
                //this.isLoggedIn = false;
                console.log(error);
            });
    }





    getAccessToken(username: string, password: string): Observable<AuthToken> {

        let oauth2_token_endpoint = 'localhost:8083/oauth/token';
        let oauth2_client_id = 'testjwtclientid';
        let oauth2_client_secret = 'XY7kmzoNzl100';
     
         const httpOptions = {
             headers: new HttpHeaders({
                 'Content-Type': 'application/x-www-form-urlencoded',
                 // 'Authorization': 'Basic ' + btoa(oauth2_client_id + ':' + oauth2_client_secret)
             })
         };
     
     
         const body = 'client_id={0}&client_secret={1}&grant_type=password&username={2}&password={3}'
             .replace('{0}', oauth2_client_id)
             .replace('{1}', oauth2_client_secret)
             .replace('{2}', username)
             .replace('{3}', password);
     
         // console.log(body);
     
         return this.http.post<AuthToken>(oauth2_token_endpoint, body, httpOptions);
     }

	*/