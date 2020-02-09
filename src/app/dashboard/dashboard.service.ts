import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable,of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  getAllQuestions(): Observable<any>
  {
      return this.http.get('//localhost:8083/crack/questions');
  }
  getAllTopics():Observable<any>
  {
    //return this.http.get('//localhost:8083/crack/topics');
    return this.http.get('//localhost:8083/crack/course');
  }


  gettopicQuestion(topicid):Observable<any>
  {
    return this.http.get('http://localhost:8083/crack/topic/'+topicid);
  }

  getSubTopicQuestion(subTopicId):Observable<any>
  {
    alert(subTopicId);
    return this.http.get('http://localhost:8083/crack/subTopic/'+subTopicId);
  }

  getAnswer(quesId):Observable<any>
  {
    return this.http.get('http://localhost:8083/crack/question/'+quesId+'/answer');
  }



}

