/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MarketplaceProduct } from '../../models/marketplace-product';

export interface FindProductsByCategoryId$Params {
  categoryId: number;
}

export function findProductsByCategoryId(http: HttpClient, rootUrl: string, params: FindProductsByCategoryId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MarketplaceProduct>>> {
  const rb = new RequestBuilder(rootUrl, findProductsByCategoryId.PATH, 'get');
  if (params) {
    rb.path('categoryId', params.categoryId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MarketplaceProduct>>;
    })
  );
}

findProductsByCategoryId.PATH = '/api/marketplace/products/category/{categoryId}';
