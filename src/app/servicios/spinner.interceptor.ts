import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

export const spinnerInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  console.log('Interceptor');
  const spinnerService = inject(NgxSpinnerService);
  spinnerService.show();

  return next(req).pipe(finalize(() => spinnerService.hide()));
};
