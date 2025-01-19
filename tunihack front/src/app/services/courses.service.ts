import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private baseURL = 'http://localhost:3000/course/';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get(`${this.baseURL}all`);
  }

  findOne(name: string): Observable<any> {
    return this.http.get(`${this.baseURL}${name}`);
  }

  findFilter(filter: any): Observable<any> {
    let params = new HttpParams();
    for (const key in filter) {
      if (filter[key]) {
        params = params.append(key, filter[key]);
      }
    }
    return this.http.get(this.baseURL, { params });
  }

  getRecommendedCourses(answers: any): Observable<any> {
    return this.http.post(`${this.baseURL}recommended`, answers);
  }

  create(createCourseDto: any): Observable<any> {
    return this.http.post(this.baseURL, createCourseDto);
  }

  update(id: string, updateCourseDto: any): Observable<any> {
    return this.http.patch(`${this.baseURL}${id}`, updateCourseDto);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}${id}`);
  }
}
