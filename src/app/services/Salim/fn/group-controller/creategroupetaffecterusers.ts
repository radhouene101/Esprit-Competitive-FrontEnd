/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Group } from '../../models/group';

export interface Creategroupetaffecterusers$Params {
  idevent: number;
  iduser1: number;
  iduser2: number;
  iduser3: number;
  iduser4: number;
      body: Group
}

export function creategroupetaffecterusers(http: HttpClient, rootUrl: string, params: Creategroupetaffecterusers$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, creategroupetaffecterusers.PATH, 'post');
  if (params) {
    rb.path('idevent', params.idevent, {});
    rb.path('iduser1', params.iduser1, {});
    rb.path('iduser2', params.iduser2, {});
    rb.path('iduser3', params.iduser3, {});
    rb.path('iduser4', params.iduser4, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

creategroupetaffecterusers.PATH = '/group/creategroupetaffecterusers/{idevent}/{iduser1}/{iduser2}/{iduser3}/{iduser4}';
