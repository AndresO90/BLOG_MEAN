import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeletePostDTO, PostObjDTO } from './home/PostsDTO';
import { CreatePost, EditPost } from './post.model';
import { UserDTO } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class PostProxyService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<UserDTO> {
      return this.http.get<UserDTO>('http://localhost:3000/users/profile');
    }
   getPosts(): Observable<PostObjDTO> {
    return this.http.get<PostObjDTO>('http://localhost:3000/posts');
  }
  createPost(data): Observable<CreatePost> {
    console.log('THIS desde create', this);
    return this.http.post<CreatePost>('http://localhost:3000/users/createpost', data);
 }
 editPost(idUser: string, idPost: string, data): Observable<EditPost> {
  console.log('THIS', this);
  return this.http.put<EditPost>('http://localhost:3000/users/' + idUser + '/post/' + idPost, data);
}
   deletePost(idUser: string, idPost: string): Observable<DeletePostDTO> {
     console.log('THIS', this);
     return this.http.delete<DeletePostDTO>('http://localhost:3000/users/' + idUser + '/post/' + idPost);
  }

}
