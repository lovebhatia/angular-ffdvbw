import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class JavaService {
  url=config.apiUrl;

  

  constructor(private http:HttpClient) { }
  
  getAllTopics(id):Observable<any>
  {
    return this.http.get(this.url+'course/'+id);
  }
  gettopicQuestion(topicid):Observable<any>
  {
    return this.http.get(this.url+'topic/'+topicid);
  }
  getSubTopicQuestion(topicName,subTopicName,subTopicId):Observable<any>
  {
      return this.http.get(this.url+'java/topicName/subTopicName/'  +subTopicId);
  }

  getAnswer(quesId):Observable<any>
  {
    return this.http.get(this.url+'question/'+quesId+'/answer');
  }
  getAllQuestionsbyCourse(id):Observable<any>
  {
    return this.http.get(this.url+'java/'+id+'/questions')
  }
}   