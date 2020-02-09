import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../_models/user';
import { AuthenticationService } from '../Services/authentication.service';
import { UserService } from '../Services/user.service';
import { Subscription } from 'rxjs';
import { DashboardService } from '../dashboard/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topics : Array<any>;
  questions : Array<any>;
  answers : String;
  courses : Array<any>;
  url: string;


  panelOpenState = false;
 
  accordionList:any;

  

  constructor(private dashboardService : DashboardService,
    router:Router) { 
    
     // this.router=router;


  }

  ngOnInit() {
	  
	  this.dashboardService.getAllTopics().subscribe(data => 
			{
		  console.log(data);
		  this.courses = data;
    });
    
    this.dashboardService.getAllQuestions().subscribe(data=>
      {
        console.log(data);
        this.questions=data;

       
      })
    }


    beforePanelClosed(panel){
      panel.isExpanded = false;
      console.log("Panel going to close!");
    }
    beforePanelOpened(panel){
      panel.isExpanded = true;
      console.log("Panel going to  open!");
    }
   
    afterPanelClosed(){
      console.log("Panel closed!");
    }
    afterPanelOpened(){
      console.log("Panel opened!");
    }
   
   
    

    


    ngAfterViewChecked() {
      this.scroll("panel-1");

    
    }
    
    
    
    scroll(id) {
    
      console.log(`scrolling to ${id}`);
    
      let el = document.getElementById(id);
    
      el.scrollIntoView();
    
    }


    expand(){
      alert('set');
      //this.isExpanded = !this.isExpanded;
      }
    gettopicQuestion(topicid)
    {
      this.dashboardService.gettopicQuestion(topicid).subscribe(data =>
        {
          this.questions=data.questionsSet;
        });
     }

     getsubTopicQuestion(subTopicId)
    {
      this.dashboardService.getSubTopicQuestion(subTopicId).subscribe(data =>
        {
          this.questions=data.questionsSet;
        });
     }

     getAnswer(questionid)
     {

      this.answers='';
        this.dashboardService.getAnswer(questionid).subscribe(data=>
          {
            if(data.length !=0)
            {
            this.answers=data[0].split(',')[1];
            }else{
              this.answers='';
            }

          }
          )
     }


    }