import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //Check for url. If it is login url then return    
        if (request.url.includes('/login')) {
            return next.handle(request);
        }

        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.auth_token) {
            request = request.clone({
                setHeaders: { 
                    Authorization:  `Bearer ${currentUser.auth_token}`
                }
            });

        }

        return next.handle(request);
    }
}