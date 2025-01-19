import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { identity } from 'rxjs';
import { repl } from '@nestjs/core';
import fetchRedditData from '../reddit'
@Injectable()
export class MessageService {
  private messages = [
    {
      id : 1,
      question: "How can I improve my JavaScript skills?",
      content: "I'm looking for resources or tips to improve my understanding of JavaScript and its advanced concepts.",
      user: "mostfa",
      date: new Date("2025-01-18T10:00:00"),
      chatRoom: "JavaScript Development",
      replys:["Read books, take online courses, and practice coding regularly."],
      
    },
    {
      id : 2,
      question: "What is the best way to optimize performance in Node.js?",
      content: "I am working on a Node.js application and want to ensure it's optimized for performance, especially under heavy load.",
      user: "john_doe",
      date: new Date("2025-01-18T11:30:00"),
      chatRoom: "Node.js Performance",
      replys:["Use asynchronous programming, optimize database queries, and consider caching and load balancing."],
      
    },
    {
      id : 3,
      question: "What are the key differences between SQL and NoSQL databases?",
      content: "I'm trying to decide whether to use a SQL or NoSQL database for my new project. What should I consider?",
      user: "jane_smith",
      date: new Date("2025-01-18T14:15:00"),
      chatRoom: "Database Design",
      replys:["SQL databases are relational and use structured query language, while NoSQL databases are non-relational and use document-based, key-value, or graph data models."]  
      
    }
  ];
  
  create(createMessageDto: CreateMessageDto) {
    const id = this.messages.length + 1;
    this.messages.push({id,...createMessageDto,replys:[]});
  }

  findAll() {

    return this.messages;
  }

  findOne(id: number) {
    const message = this.messages.find(msg => msg.id === id);
    if (!message) {
      return "Message not found";
    }
    return message;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
  answerQuestion(id:number,answer:string){
    const message = this.messages.find(msg => msg.id === id);
    if (!message) {
      return "Message not found";
    }
    message.replys.push(answer);
    return message;
  }
  async searchQuery(query:string){
    return await fetchRedditData(query)
  }
}
