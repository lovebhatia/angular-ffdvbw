import { Component, OnInit, ViewChild, Inject, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { MatAccordion } from '@angular/material';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HighlightService } from '../Services/highlight.service';
import { ViewEncapsulation } from '@angular/compiler/src/core';


declare interface question {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const QUESTIONS: question[] = [
  { path: '/dashboard',  title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  { path: '/tyuser-pography', title: 'Typography',  icon:'library_books', class: '' },
  { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  { path: '/notifications',title: 'Notifications',  icon:'notifications', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  //encapsulation: ViewEncapsulation.None,

})




export class DashboardComponent implements OnInit,AfterViewChecked {
  topics : Array<any>;
  questions : Array<any>;
  answers : String;
  courses : Array<any>;
  url: string;
  highlighted: boolean = false;



  panelOpenState = false;
 
  accordionList:any;

  @ViewChild('accordion',{static:true}) Accordion: MatAccordion
  router: any;

  constructor(private dashboardService : DashboardService,
    router:Router,
    public breakpointObserver: BreakpointObserver,
    private highlightService : HighlightService) { 
    
      this.router=router;


  }

  ngOnInit() {
	  this.getAllTopics();
    this.getAllQuestion();
}
ngAfterViewChecked() {
    this.highlightService.highlightAll();
    this.highlighted = true;
  
}

    

    ngAfterViewInit() {
     
      setTimeout(() => {
        this.scroll('locate_17');
          console.log("--------------------------------------------");
      }, 200);

  }
   
    
    
    
    scroll(id) {
    
      console.log(`scrolling to ${id}`);
    
      let el = document.getElementById(id);
    
      el.scrollIntoView();
    
    }


 


getAllTopics()
{
   
  this.dashboardService.getAllTopics().subscribe(data => 
    {
    console.log(data);
    //this.topics=data;
    this.courses = data;
  });
  
  
}



getAllQuestion()
{
      this.dashboardService.getAllQuestions().subscribe(data=>
        {
          console.log(data);
          this.questions=data;
         
        }
        );
 }


     getAnswer(questionid)
     {
      //this.location.replace("/some/newstate/");
        this.answers='';
        this.dashboardService.getAnswer(questionid).subscribe(data=>
          {
            if(data.length !=0)
            {
            this.answers=data[0].split(',')[1];
           // document.getElementById('test').innerHTML = this.answers+"";
            }else{
              this.answers='';
            }
          }
        )
     }



}




/*






 
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


    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
           console.log( 'Matches XSmall viewport');
      }
      if (state.breakpoints[Breakpoints.Small]) {
           console.log( 'Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
           console.log( 'Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {

          console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

         console.log( 'Matches XLarge viewport');   
      }
    });






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
   
   
    closeAllPanels(){
      this.Accordion.closeAll();
    }
    openAllPanels(){
      this.Accordion.openAll();
    }

   expand(){
      alert('set');
      //this.isExpanded = !this.isExpanded;
      }


*/