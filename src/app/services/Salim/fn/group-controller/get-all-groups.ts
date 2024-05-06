/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Group } from '../../models/group';

export interface GetAllGroups$Params {
}

export function getAllGroups(http: HttpClient, rootUrl: string, params?: GetAllGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Group>>> {
  const rb = new RequestBuilder(rootUrl, getAllGroups.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Group>>;
    })
  );
}

getAllGroups.PATH = '/group/getallgroups';
