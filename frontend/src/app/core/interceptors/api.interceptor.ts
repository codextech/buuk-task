import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, of, TimeoutError } from 'rxjs';
import { catchError, finalize, map, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private spinner: NgxSpinnerService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler
  ) {
    const authToken = localStorage.getItem('auth_token') || '';
    const isApiUrl = req.url.startsWith(environment.apiUrl);
    if (isApiUrl) {
      req = req.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${authToken}`,
        })
      });
    }


    this.spinner.show();


    return next.handle(req).pipe(
      timeout(10000),
      map((event: HttpEvent<any>) => {

        if (event instanceof HttpResponse) {
          //temporary
          let body = event.body && event.body.data ? event.body : { data: event.body };
          // change the response body here
          return event.clone({
            body: body,
          });
        }
        return event;
      }),
      catchError(err => {

        if (err instanceof TimeoutError) {
          alert('Request Timout, Pleasse Reload your Page')
          console.error('Timeout has occurred', req.url);
          return of(err as any)
        }
      }),
      finalize(() => this.spinner.hide())
    );
  }
}
