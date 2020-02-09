import { Question } from './ques.model';

export class subTopics
{
    subTopicName:string;
    questionsSet:{questions:Question}[]
    constructor(subtopicName:string,questinSetData:[])
    {
            this.subTopicName=subtopicName;
            this.questionsSet=questinSetData;
    }
}