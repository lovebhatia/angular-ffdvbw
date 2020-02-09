import { Topic } from './topic.model';

export class Course
{
  //courseId:number;
  courseName:String;
  topics:{ topic:Topic}[]
  constructor(  courseName:String, topicData:[]){
    //this.courseId=courseId;
    this.courseName=courseName;
    this.topics=topicData;
}
    

}