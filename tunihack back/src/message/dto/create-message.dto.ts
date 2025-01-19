export class CreateMessageDto {
    question: string;
    content: string;
    user: string;
    date: Date;
    chatRoom: string;
    replys?: string[];
    likes?: string[];
    dislikes?: string[];
    
}
