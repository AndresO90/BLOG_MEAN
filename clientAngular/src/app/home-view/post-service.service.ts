import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { PostDTO, PostObjDTO } from './home/PostsDTO';
import { Post } from './post.model';
import { PostProxyService } from './posts-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private proxy: PostProxyService) { }

  getPostModified(): Observable<Post[]> {
    return this.proxy.getPosts().pipe(
      map((postsObjDTO: PostObjDTO) => postsObjDTO.posts),
      map((postsDTO: PostDTO[]) => {
        let posts: Post[] = [];
        postsDTO.map((postDTO: PostDTO) => {
          const post: Post = {
            image: postDTO.image,
            title: postDTO.title
          };
          posts = [...posts, post];
          });
        return posts;
      })
    );
  }
}
