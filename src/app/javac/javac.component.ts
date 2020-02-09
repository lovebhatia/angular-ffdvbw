import { Component, OnInit } from '@angular/core';
import { JavaService } from './java.service';
import { ActivatedRoute, Routes } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-javac',
  templateUrl: './javac.component.html',
  styleUrls: ['./javac.component.scss']
})


export class JavacComponent implements OnInit {
  questions : Array<any>;
  question1 : Array<any>;
  topics : Array<any>;
  topics1: Array<any>;
  id : Number;
  answers:String;
  constructor(private activated_route:ActivatedRoute,
    private javaService: JavaService) { }
    sub;
    topicName:String;
    subTopicName:String;
    courseId : Number;
    subTopicId : Number;
    topicId : Number;

  ngOnInit() 
  {
    this.sub=this.activated_route.paramMap.subscribe(params =>
      { 
        console.log(params);
        this.courseId = +params.get('courseId'); 
        this.topicName=params.get('topicName');
        this.subTopicName=params.get('subTopicName');
        this.topicId=+params.get('topicId');
        this.subTopicId=+params.get('subTopicId')
        console.log(this.courseId+" "+this.topicName+" "+this.topicId+" "+this.subTopicId+" "+this.subTopicName);
        if(this.topicName!=null && this.subTopicName!=null && this.subTopicId!=null)
        {
          let topics=this.getTopics(this.courseId);
          let questions=this.getSubTopicQuestion(this.topicName,this.subTopicName,this.subTopicId);
        }else if(this.courseId!=null)
        {
          let topics=this.getTopics(this.courseId);
          let questionByCourseId=this.getQuestionByCourse(this.courseId);
        }
      });
  }

getTopics(id)
{
  this.javaService.getAllTopics(1).subscribe(data=>
  {
     this.topics=data.topics;
     if(this.topics!=null)
     {

      this.topics.push(this.topics.filter(x => x.topicId === this.topicId));
      //this.topics1.push(this.topics.filter(x => x.topicId != this.topicId));
      //console.log(this.topics1+"after filter topics");
     }


  });
}
getSubTopicQuestion(topicName,subTopicName,subtopicId)
 {
  this.javaService.getSubTopicQuestion(topicName,subTopicName,subtopicId).subscribe(data =>
    {
      this.questions=data.questionsSet;
    });
 }
getQuestionByCourse(id)
{
  this.javaService.getAllQuestionsbyCourse(id).subscribe(data=>
  {
     this.questions=data;
             if(this.questions!=null)
             {
               
                this.questions=this.questions.filter(x => x.courseId === this.courseId);
             }
            console.log(this.questions+"after filter");
  });
}
getAllTopics(id)
 {
  this.javaService.getAllTopics(id).subscribe(data => 
  {
    console.log(data);
    this.topics = data.topics;
  });
 }
 

 getAnswer(questionid)
 {
   this.answers='';
  this.javaService.getAnswer(questionid).subscribe(data=>
      {
        this.answers=data[0].split(',')[1];
      });
 }

 getDimensionsByFilter(id)
  {
    return this.questions.filter(x => x.courseId === id);
  }
}


/*gettopicQuestion(topicid)
{
  this.javaService.gettopicQuestion(topicid).subscribe(data =>
    {
      this.questions=data.questionsSet;
    });
 }*/

/*
  function getDimensionsByFilter(id){
    return questions.filter(x => x.category === 'Financial');
    }
    
    function getDimensionsByFind(id){
    return questions.find(x => x.category === 'Financial');
    }

    var questions = getDimensionsByFilter(10);
    console.log(questions1.id+"questions add");
    
    var questions1 = getDimensionsByFind(10);
    console.log(questions1.id+"questions add1");



/* var questions = [
    {id: 1, question: "Do you feel a connection to a higher source and have a sense of comfort knowing that you are part of something greater than yourself?", category: "Spiritual", subs: []},
    {id: 2, question: "Do you feel you are free of unhealthy behavior that impacts your overall well-being?", category: "Habits", subs: []},
    {id: 3, question: "Do you feel you have healthy and fulfilling relationships?", category: "Relationships", subs: []},
    {id: 4, question: "Do you feel you have a sense of purpose and that you have a positive outlook about yourself and life?", category: "Emotional Well-being", subs: []},
    {id: 5, question: "Do you feel you have a healthy diet and that you are fueling your body for optimal health? ", category: "Eating Habits ", subs: []},
    {id: 6, question: "Do you feel that you get enough rest and that your stress level is healthy?", category: "Relaxation ", subs: []},
    {id: 7, question: "Do you feel you get enough physical activity for optimal health?", category: "Exercise ", subs: []},
    {id: 8, question: "Do you feel you practice self-care and go to the doctor regularly?", category: "Medical Maintenance", subs: []},
    {id: 9, question: "Do you feel satisfied with your income and economic stability?", category: "Financial", subs: []},
    {id: 10, question: "Do you feel you do fun things and laugh enough in your life?", category: "Play", subs: []},
    {id: 11, question: "Do you feel you have a healthy sense of balance in this area of your life?", category: "Work-life Balance", subs: []},
    {id: 12, question: "Do you feel a sense of peace and contentment  in your home? ", category: "Home Environment", subs: []},
    {id: 13, question: "Do you feel that you are challenged and growing as a person?", category: "Intellectual Wellbeing", subs: []},
    {id: 14, question: "Do you feel content with what you see when you look in the mirror?", category: "Self-image", subs: []},
    {id: 15, question: "Do you feel engaged at work and a sense of fulfillment with your job?", category: "Work Satisfaction", subs: []}
];

*/

//var questions = getDimensionsByFilter(10);
//console.log(questions);

//var questions1 = getDimensionsByFind(10);
//console.log(questions1);
//var questions;




   /*this.javaService.getAllTopics().subscribe(data => 
    {
    console.log(data);
    this.topics = data;
  });*/


    /*this.javaService.getAllTopics(1).subscribe(data =>
    {

      console.log(data);
      this.topics=data.topics;
    });*/


