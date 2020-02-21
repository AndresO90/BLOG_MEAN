import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const re = /login/gi;
    const token = sessionStorage.getItem('token');
    console.log('TOKEN DESDE INTERCEPTOR :', token);
    console.log('req.url.search(re)', req.url.search(re));

    // Exclude interceptor for login request:
    if (req.url.search(re) === -1 ) {
      req = req.clone({headers: req.headers.set('Authorization', token)});
    }



    // const authReq = req.clone(
    //   {headers: req.headers.set('Authorization', token)}
    //   );
    return next.handle(req);
  }
}
