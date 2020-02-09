import { Answers } from './ans.model';

export class Question
{
  questions_name:string;
  answers:{ans:Answers}[]
  constructor(questions_name:string, answers:[])  
  {
      this.questions_name=questions_name;
      this.answers=answers;
  }
    
}