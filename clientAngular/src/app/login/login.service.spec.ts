import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { LOGIN_FAKE } from './login/loginFake.spec';


describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call to server to get posts', () => {
    const userName = 'blogUser';
    const password = '123';

    const httpMock = TestBed.inject(HttpTestingController);
    service.login(userName, password)
    .subscribe(user => expect(user).toBe(LOGIN_FAKE));
    const request = httpMock.expectOne('http://localhost:3000/users/login');
    expect(request.request.method).toEqual('POST');
    request.flush(LOGIN_FAKE);
    httpMock.verify();
  });

});
