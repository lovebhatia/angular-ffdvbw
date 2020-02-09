import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../Services/authentication.service';
import { Answers } from '../models/ans.model';
import { Question } from '../models/ques.model';
import { Topic } from '../models/topic.model';
import { Course } from '../models/course.model';
import { subTopics } from '../models/subTopic.model';
import { Config } from 'protractor';
import { config } from '../config';
import { AdminQuesService } from './admin-ques.service';
import { ImageService } from './image.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpParams, HttpClient } from "@angular/common/http";
import {  UploadAdapter } from './UploadAdapter';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

@Component({
  selector: 'app-admin-ques',
  templateUrl: './admin-ques.component.html',
  styleUrls: ['./admin-ques.component.scss'],

})

export class AdminQuesComponent  {
  
 

public value: string = '<p>The RichTextEditor triggers events based on its actions. </p>'

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    groupTopics:any=[];
    groupSubTopics:any=[];
    groupQuestions:any=[];
    groupAnswers:any=[];
    courselist:any=[];
    topicList:any=[];
    SubTopicList:any=[];
    error = '';
    ans='';
    urlMake:String;
    selectedFile: ImageSnippet;
     filetoUpload:File;
     url=config.apiUrl;
     public Editor = ClassicEditor;

     public model = {
      editorData: '<p>Hello, world!</p>'
  };

    

  

    powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
    modelans =new Answers('');
    modelQues=new Question('',this.groupAnswers);
    modelSubTopic=new subTopics('',this.groupQuestions);
    modelTopic=new Topic('',this.groupSubTopics);
    model1=new Course('',this.groupTopics);
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private quesAddService : AdminQuesService,
        private imageService : ImageService,
        public http : HttpClient
    ) { }


    public imagePath;
    imgURL: any;
    public message: string;
   

    public imageSetting = {
      path:"http://localhost:8083/crack/uploadFile/1",
      //: "../Images/"
     };


     
     public tools: object = {
      items: [
             'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
             'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
             'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
             'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
             'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
             'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
     };

     public iframe: object = {
        enable: true,
        //attributes: {
      //    readonly: 'readonly'
      //}
      };

    
    get currentBook()
     {
        return JSON.stringify(this.model1); 
     }

     onReady(eventData) {
      eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
        console.log(btoa(loader.file));
         return new UploadAdapter(loader);
      };
    }




    preview(files) {
        if (files.length === 0)
        return;
      this.filetoUpload=files[0];
      var filename=files[0].name;
      this.urlMake='<html><br><img src='+"'"+this.url+'downloadFile/'+filename+"'"+' class="rounded"  width="100%" height="100%"></html></br>'
      this.modelans.ans=this.modelans.ans+this.urlMake;

      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }





     
      processFile() {
       // const file: File = imageInput.files[0];

        const reader = new FileReader();
    
        reader.addEventListener('load', (event: any) => {
    
          this.selectedFile = new ImageSnippet(event.target.result, this.filetoUpload);
    
          this.selectedFile.pending = true;
          this.imageService.uploadImage(this.selectedFile.file).subscribe(
            (res) => {
              this.onSuccess();
            },
            (err) => {
              this.onError();
            })
        });
    
        reader.readAsDataURL(this.filetoUpload);
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
     
     get currentBook1()
     {
        return JSON.stringify(this.modelSubTopic); 
     }

      loadMasterValues(value)
     {
        this.quesAddService.getTopics(value).subscribe(data =>
            {
                console.log(data);
                this.topicList=data;
                console.log(this.topicList);
            })
            //return this.topicList;
     }

     loadMasterValues1(value)
     {
        this.quesAddService.getSubTopics(value).subscribe(data =>
            {
                console.log(data);
                this.SubTopicList=data;
                console.log(this.SubTopicList);
            })
            //return this.topicList;
     }


    ngOnInit()
     {
        this.quesAddService.getCourses().subscribe(courseData =>
        {
          console.log(courseData);
          this.courselist=courseData  ;
          console.log(courseData);
        })
      }
    addCourse(value,dataAns)
    {
        let replaceVal="<pre style='background: #f4f4f4;border: 1px solid #ddd;border-left: 3px solid #f36d33;color: #666;page-break-inside: avoid;font-family: monospace;font-size: 15px;line-height: 1.6;margin-bottom: 1.6em;width: 100%;overflow: auto;padding: 1em 1.5em;display: block;word-wrap: break-word;'></pre>"
        dataAns=dataAns.replace(/<pre/g, replaceVal);
        this.modelans.ans=dataAns.replace(/"/g, "'");
        this.groupAnswers.push(this.modelans);
        this.groupQuestions.push(this.modelQues);
        this.groupSubTopics.push(this.modelSubTopic);
        this.groupTopics.push(this.modelTopic);
        console.log(JSON.stringify(this.modelTopic));
        this.quesAddService.addQuestions(value,this.modelQues);
        window.location.reload(); 
      }



    addQuestion(value)
    {
       
        //this.modelans.ans=this.modelans.ans.replace(/"/g, "'");
        this.groupAnswers.push(this.modelans);
        this.groupQuestions.push(this.modelQues);
        this.quesAddService.addQuestions1(this.modelQues);
        alert("Your question and answer has been added");
        //window.location.reload();
        this.modelQues.questions_name='';
        this.modelans.ans='';
        this.modelQues=null;
    }


}


class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

/*




class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

*/
