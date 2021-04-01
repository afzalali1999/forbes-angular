import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Blog } from '../interfaces/blog';
// import { BLOGS } from '../mock-blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  rootUrl: string = 'https://forbes-ali.herokuapp.com/api';

  constructor(private http: HttpClient) { }
  
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.rootUrl + '/blogs');
  }

  createBlog(formValues: Blog): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/blogs', formValues);
  }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete<any>(this.rootUrl + `/blogs/${id}`);
  }
}
