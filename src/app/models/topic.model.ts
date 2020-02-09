import { subTopics } from './subTopic.model';

export class Topic
{
  topicName:string;
  topicsSet:{subtopic:subTopics  }[]
  constructor(topicName:string,topicSet:[])
   {
      this.topicName=topicName;
      this.topicsSet=topicSet;
   }
}