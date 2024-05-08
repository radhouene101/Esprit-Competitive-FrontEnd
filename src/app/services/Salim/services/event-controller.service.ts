/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createEvent } from '../fn/event-controller/create-event';
import { CreateEvent$Params } from '../fn/event-controller/create-event';
import { deleteEvent1 } from '../fn/event-controller/delete-event-1';
import { DeleteEvent1$Params } from '../fn/event-controller/delete-event-1';
import { Event } from '../models/event';
import { getAllEvents } from '../fn/event-controller/get-all-events';
import { GetAllEvents$Params } from '../fn/event-controller/get-all-events';
import { getEventById } from '../fn/event-controller/get-event-by-id';
import { GetEventById$Params } from '../fn/event-controller/get-event-by-id';
import { sendNotification } from '../fn/event-controller/send-notification';
import { SendNotification$Params } from '../fn/event-controller/send-notification';
import { updateEvent } from '../fn/event-controller/update-event';
import { UpdateEvent$Params } from '../fn/event-controller/update-event';
import { uploadEventImage } from '../fn/event-controller/upload-event-image';
import { UploadEventImage$Params } from '../fn/event-controller/upload-event-image';

@Injectable({ providedIn: 'root' })
export class EventControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateEvent()` */
  static readonly UpdateEventPath = '/event/updatevent/{eventid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEvent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvent$Response(params: UpdateEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<Event>> {
    return updateEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEvent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvent(params: UpdateEvent$Params, context?: HttpContext): Observable<Event> {
    return this.updateEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<Event>): Event => r.body)
    );
  }

  /** Path part for operation `uploadEventImage()` */
  static readonly UploadEventImagePath = '/event/{eventId}/image';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadEventImage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadEventImage$Response(params: UploadEventImage$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadEventImage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadEventImage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadEventImage(params: UploadEventImage$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadEventImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `createEvent()` */
  static readonly CreateEventPath = '/event/addevent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEvent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEvent$Response(params: CreateEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<Event>> {
    return createEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createEvent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEvent(params: CreateEvent$Params, context?: HttpContext): Observable<Event> {
    return this.createEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<Event>): Event => r.body)
    );
  }

  /** Path part for operation `sendNotification()` */
  static readonly SendNotificationPath = '/event/sendNotification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendNotification()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendNotification$Response(params?: SendNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return sendNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendNotification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendNotification(params?: SendNotification$Params, context?: HttpContext): Observable<void> {
    return this.sendNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getEventById()` */
  static readonly GetEventByIdPath = '/event/geteventbyid/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEventById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventById$Response(params: GetEventById$Params, context?: HttpContext): Observable<StrictHttpResponse<Event>> {
    return getEventById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEventById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventById(params: GetEventById$Params, context?: HttpContext): Observable<Event> {
    return this.getEventById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Event>): Event => r.body)
    );
  }

  /** Path part for operation `getAllEvents()` */
  static readonly GetAllEventsPath = '/event/getallevents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEvents$Response(params?: GetAllEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Event>>> {
    return getAllEvents(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEvents(params?: GetAllEvents$Params, context?: HttpContext): Observable<Array<Event>> {
    return this.getAllEvents$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Event>>): Array<Event> => r.body)
    );
  }

  /** Path part for operation `deleteEvent1()` */
  static readonly DeleteEvent1Path = '/event/deletevent/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEvent1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvent1$Response(params: DeleteEvent1$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteEvent1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEvent1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvent1(params: DeleteEvent1$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteEvent1$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
