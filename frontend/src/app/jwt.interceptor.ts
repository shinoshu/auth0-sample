import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { mergeMap, Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.auth.getIdTokenClaims().pipe(
      mergeMap((token) => {
        const req = request.clone({
          headers: request.headers.set(
            'Authorization',
            `Bearer ${token?.__raw}`
          ),
        });
        return next.handle(req);
      })
    );
  }
}
