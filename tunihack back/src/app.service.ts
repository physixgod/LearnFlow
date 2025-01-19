import { Injectable, Search } from '@nestjs/common';
import fetchRedditData from './reddit'
@Injectable()
export class AppService {
  getHello(): string {
    
    return 'Hello World!';
  }
}
