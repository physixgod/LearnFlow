// user/user.schema.ts
import { Prop, SchemaFactory,Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
    @Prop({ required: true, unique: true })
    id: number;
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: [] })
  courses: string[];

  @Prop({ default:0 })
  rewards: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
