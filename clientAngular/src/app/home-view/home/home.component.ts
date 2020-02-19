import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { PostsStoreService } from '../store/postStore.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Post[]>;
  constructor(private store: PostsStoreService) { }

  ngOnInit(): void {
  this.store.init();
  this.posts = this.store.get$();
  console.log(this);
  }

}
