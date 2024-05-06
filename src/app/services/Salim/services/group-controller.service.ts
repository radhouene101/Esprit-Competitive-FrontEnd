/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createGroup } from '../fn/group-controller/create-group';
import { CreateGroup$Params } from '../fn/group-controller/create-group';
import { creategroupetaffecterusers } from '../fn/group-controller/creategroupetaffecterusers';
import { Creategroupetaffecterusers$Params } from '../fn/group-controller/creategroupetaffecterusers';
import { deleteEvent } from '../fn/group-controller/delete-event';
import { DeleteEvent$Params } from '../fn/group-controller/delete-event';
import { getAllGroups } from '../fn/group-controller/get-all-groups';
import { GetAllGroups$Params } from '../fn/group-controller/get-all-groups';
import { getGroupById } from '../fn/group-controller/get-group-by-id';
import { GetGroupById$Params } from '../fn/group-controller/get-group-by-id';
import { Group } from '../models/group';
import { updateForum } from '../fn/group-controller/update-forum';
import { UpdateForum$Params } from '../fn/group-controller/update-forum';

@Injectable({ providedIn: 'root' })
export class GroupControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateForum()` */
  static readonly UpdateForumPath = '/group/updategroup/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateForum()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateForum$Response(params: UpdateForum$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
    return updateForum(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateForum$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateForum(params: UpdateForum$Params, context?: HttpContext): Observable<Group> {
    return this.updateForum$Response(params, context).pipe(
      map((r: StrictHttpResponse<Group>): Group => r.body)
    );
  }

  /** Path part for operation `creategroupetaffecterusers()` */
  static readonly CreategroupetaffecterusersPath = '/group/creategroupetaffecterusers/{idevent}/{iduser1}/{iduser2}/{iduser3}/{iduser4}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `creategroupetaffecterusers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  creategroupetaffecterusers$Response(params: Creategroupetaffecterusers$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return creategroupetaffecterusers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `creategroupetaffecterusers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  creategroupetaffecterusers(params: Creategroupetaffecterusers$Params, context?: HttpContext): Observable<void> {
    return this.creategroupetaffecterusers$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createGroup()` */
  static readonly CreateGroupPath = '/group/addgroup/{idevent}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createGroup$Response(params: CreateGroup$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
    return createGroup(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createGroup(params: CreateGroup$Params, context?: HttpContext): Observable<Group> {
    return this.createGroup$Response(params, context).pipe(
      map((r: StrictHttpResponse<Group>): Group => r.body)
    );
  }

  /** Path part for operation `getGroupById()` */
  static readonly GetGroupByIdPath = '/group/getgroupbyid/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGroupById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupById$Response(params: GetGroupById$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
    return getGroupById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGroupById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupById(params: GetGroupById$Params, context?: HttpContext): Observable<Group> {
    return this.getGroupById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Group>): Group => r.body)
    );
  }

  /** Path part for operation `getAllGroups()` */
  static readonly GetAllGroupsPath = '/group/getallgroups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllGroups()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllGroups$Response(params?: GetAllGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Group>>> {
    return getAllGroups(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllGroups$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllGroups(params?: GetAllGroups$Params, context?: HttpContext): Observable<Array<Group>> {
    return this.getAllGroups$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Group>>): Array<Group> => r.body)
    );
  }

  /** Path part for operation `deleteEvent()` */
  static readonly DeleteEventPath = '/group/deletegroup/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvent$Response(params: DeleteEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvent(params: DeleteEvent$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
