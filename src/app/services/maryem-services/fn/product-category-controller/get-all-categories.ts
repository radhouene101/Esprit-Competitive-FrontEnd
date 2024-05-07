/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductCategory } from '../../models/product-category';

export interface GetAllCategories$Params {
}

export function getAllCategories(http: HttpClient, rootUrl: string, params?: GetAllCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductCategory>>> {
  const rb = new RequestBuilder(rootUrl, getAllCategories.PATH, 'get');
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

getAllCategories.PATH = '/api/marketplace/categories/getAllCategories';
