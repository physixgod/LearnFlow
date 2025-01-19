import { Component } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
  query: string = ''; 
  postTitle: string = ''; 
  postText: string = ''; 
  comments: { username: string; body: string }[] = []; 
  isLoading: boolean = false; 
  errorMessage: string | null = null; 
  isSearchClicked: boolean = false; 

  

  constructor(private redditService: RedditService) {}
 

  searchReddit(): void {
    console.log(this.query);
    if (!this.query.trim()) {
      this.errorMessage = 'Please enter a valid search query.';
      return;
    }
  
    this.isLoading = true;
    this.errorMessage = null;
    this.isSearchClicked = true;
    this.redditService.searchQuestion(this.query).subscribe(
      (results) => {
        const post = results[0]; 
        const commentList = results[1]; 
  
        this.postTitle = post.title;
        this.postText = post.selftext;
  
      
        this.comments = commentList.slice(0, 10).map((comment: any) => ({
          username: this.generateRandomUsername(),
          body: comment.body
        }));
  
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching results. Please try again.';
        this.isLoading = false;
        console.error('Error during search:', error);
      }
    );
  }

  generateRandomUsername(): string {
    const adjectives = ['Clever', 'Brave', 'Mysterious', 'Witty', 'Cheerful'];
    const nouns = ['Panda', 'Fox', 'Dragon', 'Knight', 'Eagle'];
    return (
      adjectives[Math.floor(Math.random() * adjectives.length)] +
      nouns[Math.floor(Math.random() * nouns.length)] +
      Math.floor(Math.random() * 1000)
    );
  }
}
