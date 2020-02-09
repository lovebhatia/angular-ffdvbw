import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClint:HttpClient) { }

  public uploadImage(image: File): Observable<any> {
    
    const formData = new FormData();
    formData.append('file', image);
    console.log(formData);

    return this.httpClint.post('http://localhost:8083/crack/uploadFile/1', formData);
  }

  


}
