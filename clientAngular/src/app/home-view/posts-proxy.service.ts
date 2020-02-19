import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostObjDTO } from './home/PostsDTO';

@Injectable({
  providedIn: 'root'
})
export class PostProxyService {

  constructor(private http: HttpClient) { }

   getPosts(): Observable<PostObjDTO> {
    return this.http.get<PostObjDTO>('http://localhost:3000/posts');
  }
}
