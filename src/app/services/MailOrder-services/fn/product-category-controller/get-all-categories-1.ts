/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductCategory } from '../../models/product-category';

export interface GetAllCategories1$Params {
}

export function getAllCategories1(http: HttpClient, rootUrl: string, params?: GetAllCategories1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductCategory>>> {
  const rb = new RequestBuilder(rootUrl, getAllCategories1.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProductCategory>>;
    })
  );
}

getAllCategories1.PATH = '/api/marketplace/categories/getAllCategories';
