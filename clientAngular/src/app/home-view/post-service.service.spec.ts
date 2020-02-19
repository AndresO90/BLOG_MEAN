import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostService } from './post-service.service';
import { Post } from './post.model';
import { PostProxyService } from './posts-proxy.service';
import { FAKE_POSTS } from './postsFake.spec';

describe('PostServiceService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should adapt postDTO to post ', () => {
    const spyService = spyOn(TestBed.inject(PostProxyService), 'getPosts').and.callFake(
      () => of(FAKE_POSTS)
    );

    service.getPostModified().subscribe((posts: Post[]) => {
      expect(posts[0].image).toEqual(FAKE_POSTS[0].image);
      expect(posts[0].title).toEqual(FAKE_POSTS[0].title);
    });
    expect(spyService).toHaveBeenCalled();
  });
});
