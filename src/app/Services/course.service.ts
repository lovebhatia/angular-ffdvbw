import { Injectable } from '@angular/core';
import { config } from '../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  getCourse()
  {
    return this.http.get(config.apiUrl+"/course");
  }
}
