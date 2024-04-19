/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HelloResponse } from '../../models/hello-response';

export interface Hello1$Params {
}

export function hello1(http: HttpClient, rootUrl: string, params?: Hello1$Params, context?: HttpContext): Observable<StrictHttpResponse<HelloResponse>> {
  const rb = new RequestBuilder(rootUrl, hello1.PATH, 'get');
  if (sessionStorage.getItem('userToken')) {
    rb.header('Authorization',
      "Bearer "+sessionStorage.getItem('userToken'),
      {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HelloResponse>;
    })
  );
}

hello1.PATH = '/api/hello';
