import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DeletePostDTO } from '../home/PostsDTO';
import { PostService } from '../post-service.service';
import { CreatePost, EditPost, Post } from '../post.model';
import { PostProxyService } from '../posts-proxy.service';
import { Store } from './Store';

@Injectable({
    providedIn: 'root'
  })

  export class PostsStoreService extends Store<Post[]> {
    constructor(private service: PostService, private postService: PostProxyService) {
    super();
    }
    init(): Promise<Post[]> {
        if (this.get()) {return ; }
        return this.service.getPostModified().pipe(
        tap(this.store)
        ).toPromise();
        }



          create$(data): Promise<CreatePost> {
            return this.postService.createPost(data).pipe(
            tap(postResult => {
              const newPost = {
                title: postResult.title,
                image: postResult.image,
                _id: postResult._id
              };
              this.store([newPost, ...this.get()]);
            })
            ).toPromise();
            }

            update$(idUser: string, idPost: string, data): Promise<EditPost> {
              console.log('HOLA');
              return this.postService.editPost(idUser, idPost, data).pipe(
              tap(() => {
              const posts = this.get();
              const p = Object.assign({}, data);
              const index = this.searchIndex(posts, idPost);
              const newPosts = [...posts.slice(0, index), p, ...posts.slice(index
                + 1)];
              console.log('POSTS', posts);
              console.log('P', p);
              console.log('index', index);
              console.log('NEWPOST', newPosts);

              this.store(newPosts);
              })
              ).toPromise();
              }

              delete$(idUser: string, idPost: string): Promise<DeletePostDTO> {
                return this.postService.deletePost(idUser, idPost).pipe(
                tap(() => {
                const posts = this.get();
                const newPosts = posts.filter(post => post._id !== idPost);
                this.store(newPosts);
                })
                ).toPromise();
                }

                private searchIndex(posts, idPost: string) {

                  console.log('FINDINDEX', posts, '--------', idPost);
                  return posts.findIndex(item => item._id === idPost);
                  }
  }
