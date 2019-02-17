import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPostsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(userId): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.getPostsEndpoint}?userId=${userId}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
