import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { PostProxyService } from '../posts-proxy.service';
import { PostsStoreService } from '../store/postStore.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Post[]>;
  userId: string;
  form: FormGroup;


  constructor(private store: PostsStoreService, private service: PostProxyService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      image: new FormControl(''),
      text: new FormControl('')
  });


    this.store.init();
    this.posts = this.store.get$();
    this.service.getProfile().subscribe(
      res => this.userId = res.user._id
    );
    console.log('PROFILE', this.service.getProfile() );
    console.log('MIRAR', this);
  }
  delete(ev) {

    const idUser = this.userId;
    console.log(' DELETE', idUser);
    const idPost = ev.target.parentElement.id;
    this.store.delete$(idUser, idPost);
  }
  create() {
    console.log('create', this.form.value);
    const title = this.form.get('title').value;
    const image = this.form.get('image').value;
    const text = this.form.get('text').value;
    this.store.create$({title, image, text});
  }
  edit(ev) {
    const idUser = this.userId;
    console.log('idUser', idUser);
    const idPost = ev.target.parentElement.id;
    console.log('create', this.form.value);
    const data = {
       title : this.form.get('title').value,
      image : this.form.get('image').value,
      _id: idPost,
       text : this.form.get('text').value

    };

    this.store.update$(idUser, idPost, data);
  }

}
