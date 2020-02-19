import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostProxyService } from './posts-proxy.service';
import { FAKE_POSTS } from './postsFake.spec';

describe('PostProxyService', () => {
  let service: PostProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call to server to get posts', () => {
    const service: PostProxyService = TestBed.inject(PostProxyService);
    const httpMock = TestBed.inject(HttpTestingController);
    service.getPosts()
    .subscribe(posts => expect(posts).toBe(FAKE_POSTS));
    const request = httpMock.expectOne('http://localhost:3000/posts');
    expect(request.request.method).toEqual('GET');
    request.flush(FAKE_POSTS);
    httpMock.verify();
  });
});
