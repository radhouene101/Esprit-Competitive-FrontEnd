/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createProduct1 } from '../fn/product-category-controller/create-product-1';
import { CreateProduct1$Params } from '../fn/product-category-controller/create-product-1';
import { deleteCategory } from '../fn/product-category-controller/delete-category';
import { DeleteCategory$Params } from '../fn/product-category-controller/delete-category';
import { getAllCategories } from '../fn/product-category-controller/get-all-categories';
import { GetAllCategories$Params } from '../fn/product-category-controller/get-all-categories';
import { getCategoryById } from '../fn/product-category-controller/get-category-by-id';
import { GetCategoryById$Params } from '../fn/product-category-controller/get-category-by-id';
import { ProductCategory } from '../models/product-category';

@Injectable({ providedIn: 'root' })
export class ProductCategoryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createProduct1()` */
  static readonly CreateProduct1Path = '/api/marketplace/categories/addCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProduct1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct1$Response(params: CreateProduct1$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return createProduct1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createProduct1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct1(params: CreateProduct1$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.createProduct1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /** Path part for operation `getCategoryById()` */
  static readonly GetCategoryByIdPath = '/api/marketplace/categories/getCategoryById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById$Response(params: GetCategoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getCategoryById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById(params: GetCategoryById$Params, context?: HttpContext): Observable<{
}> {
    return this.getCategoryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllCategories()` */
  static readonly GetAllCategoriesPath = '/api/marketplace/categories/getAllCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories$Response(params?: GetAllCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductCategory>>> {
    return getAllCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories(params?: GetAllCategories$Params, context?: HttpContext): Observable<Array<ProductCategory>> {
    return this.getAllCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductCategory>>): Array<ProductCategory> => r.body)
    );
  }

  /** Path part for operation `deleteCategory()` */
  static readonly DeleteCategoryPath = '/api/marketplace/categories/deleteCategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory$Response(params: DeleteCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory(params: DeleteCategory$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
