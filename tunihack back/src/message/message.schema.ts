// message/message.schema.ts
import { Prop, SchemaFactory ,Schema} from '@nestjs/mongoose';
import { User } from '../user/user.schema'; // Reference to User schema

@Schema()
export class Message {
  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  sent_at: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
