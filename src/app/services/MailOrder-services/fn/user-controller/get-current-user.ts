/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserDetails } from '../../models/user-details';

export interface GetCurrentUser$Params {
}

export function getCurrentUser(http: HttpClient, rootUrl: string, params?: GetCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDetails>> {
  const rb = new RequestBuilder(rootUrl, getCurrentUser.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserDetails>;
    })
  );
}

getCurrentUser.PATH = '/user/current-user';
