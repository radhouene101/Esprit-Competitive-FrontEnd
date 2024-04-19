/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { hello1 } from '../fn/hello-controller/hello-1';
import { Hello1$Params } from '../fn/hello-controller/hello-1';
import { HelloResponse } from '../models/hello-response';

@Injectable({ providedIn: 'root' })
export class HelloControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `hello1()` */
  static readonly Hello1Path = '/api/hello';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `hello1()` instead.
   *
   * This method doesn't expect any request body.
   */
  hello1$Response(params?: Hello1$Params, context?: HttpContext): Observable<StrictHttpResponse<HelloResponse>> {
    return hello1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `hello1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  hello1(params?: Hello1$Params, context?: HttpContext): Observable<HelloResponse> {
    return this.hello1$Response(params, context).pipe(
      map((r: StrictHttpResponse<HelloResponse>): HelloResponse => r.body)
    );
  }

}
