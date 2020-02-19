import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PostService } from '../post-service.service';
import { Post } from '../post.model';
import { PostStore } from './postStore';

@Injectable({
    providedIn: 'root'
  })

  export class PostsStoreService extends PostStore<Post[]> {
    constructor(private service: PostService) {
    super();
    }

    init(): Promise<Post[]> {
        if (this.get()) {return; }

        return this.service.getPostModified().pipe(
        tap(this.store)
        ).toPromise();

        }
  }
