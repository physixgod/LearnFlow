import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  private baseURL = 'http://localhost:3000/message/';

  constructor(private http: HttpClient) {}
  searchQuestion(query: string): Observable<any> {
    const url = `${this.baseURL}query/${query}`;
    return this.http.get(url);
  }
}
