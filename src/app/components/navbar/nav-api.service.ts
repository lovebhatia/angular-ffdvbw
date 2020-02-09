import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // only need to import from rxjs


@Injectable({
  providedIn: 'root'
})
export class NavApiService {

  api_key = '3998abc8b6774dd7aa4ef48ebbce74eb';
	private apiUrl="http://localhost:8083/getAllQues";

  constructor(private http:HttpClient) { }


  getQuestions(): Observable<any> {
    return this.http.get('//localhost:8083/crack/course/1');
    //.map(response => response.json());
  }
	
	/*getQuestions()
	{
		return this.http.get(this.apiUrl).map((res : Response) => res.json)
	}*/


  initSources()
  {
    //return this.http.get('//localhost:8083/');

  }
  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
   }
   getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
   }
}
