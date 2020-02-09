import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AdminQuesService {



  url=config.apiUrl;

  constructor(private httpClient:HttpClient) 
  {
  }
  getCourses()
  {
    
    return this.httpClient.get(this.url+'courses');
  }
  getTopics(value)
  {
    return this.httpClient.get(this.url+'topics/'+value.split(',')[1]);
  }

  getSubTopics(value)
  {
    return this.httpClient.get(this.url+'subTopics/'+value.split(',')[1]);
  }
  addQuestions(value,data)
  {
    return this.httpClient.post(this.url+'subtopic/'+value.split(',')[1]+'/question',data).
    subscribe(res =>
      console.log(res));
  }

  addQuestions1(data)                                       
  {
    console.log(JSON.stringify(data));
    return this.httpClient.post(this.url+'questions',data)
    .subscribe(res =>
      console.log(res)
      );
   }

}

