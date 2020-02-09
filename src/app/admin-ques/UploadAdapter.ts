import { HttpParams, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ImageService } from './image.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}
/*
export class UploadAdapterTest{
  selectedFile: ImageSnippet;
  private imageService : ImageService

    private http : HttpClient
    constructor(
      private loader
      ) {
    }
  
    
    private onSuccess() {
      this.selectedFile.pending = false;
      this.selectedFile.status = 'ok';
    }
  
    private onError() {
      this.selectedFile.pending = false;
      this.selectedFile.status = 'fail';
      this.selectedFile.src = '';
    }


  //the uploadFile method use to upload image to your server
  uploadFile(file,url?:string){
    let name = '';
    url='your api';
    let formData:FormData = new FormData();
    let headers = new Headers();
    name = file.name;
    formData.append('attachment', file, name);
    const dotIndex = name.lastIndexOf('.');
    const fileName  = dotIndex>0?name.substring(0,dotIndex):name;
    formData.append('name', fileName);
    //formData.append('source', user);
  
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log('formData',formData);
    let params = new HttpParams();
    const options = {
        params: params,
        reportProgress: true,
    };
  //http post return an observer
  //so I need to convert to Promise
return this.http.post('http://localhost:8083/crack/uploadFile/1',formData).toPromise;
  }
  //implement the upload 
  
  upload() {
     let upload = new Promise((resolve, reject)=>{
        this.loader['file'].then(
            (data)=>{
                this.uploadFile(data)
                .subscribe(
                    (result)=>{

                      resolve({ default: result['attachment'] })
                    },
                    (error)=>{
                        reject(data.msg);
                    }
                );
            }
        );
      });
      



  }


    abort() {
      console.log("abort")
  }
  }
  */
  
  
  export class UploadAdapter {
    private loader;
    private imageService : ImageService
    constructor(loader: any) {
      this.loader = loader;
      console.log(this.readThis(loader.file));
    }
  




    
    public upload(): Promise<any> {
      //"data:image/png;base64,"+ btoa(binaryString) 
      return this.readThis(this.loader.file);
    }
  
    readThis(file: File): Promise<any> {
      console.log(file)
      let imagePromise: Promise<any> = new Promise((resolve, reject) => {
        this.loader['file'].then(
          (data)=>
          {
            var myReader: FileReader = new FileReader();
           
          let image = myReader.result;
          console.log(image);
          return { 'http://localhost:8083/crack/uploadFile/1': "data:image/png;base64," + data };
          resolve();
        }

          
        )
        
        });
      return imagePromise;
    }
  
  }