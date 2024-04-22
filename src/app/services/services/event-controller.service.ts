/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { add4 } from '../fn/event-controller/add-4';
import { Add4$Params } from '../fn/event-controller/add-4';
import { delete4 } from '../fn/event-controller/delete-4';
import { Delete4$Params } from '../fn/event-controller/delete-4';
import { EventDto } from '../models/event-dto';
import { findAll4 } from '../fn/event-controller/find-all-4';
import { FindAll4$Params } from '../fn/event-controller/find-all-4';
import { findById4 } from '../fn/event-controller/find-by-id-4';
import { FindById4$Params } from '../fn/event-controller/find-by-id-4';
import { update4 } from '../fn/event-controller/update-4';
import { Update4$Params } from '../fn/event-controller/update-4';

@Injectable({ providedIn: 'root' })
export class EventControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById4()` */
  static readonly FindById4Path = '/event/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4$Response(params: FindById4$Params, context?: HttpContext): Observable<StrictHttpResponse<EventDto>> {
    return findById4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4(params: FindById4$Params, context?: HttpContext): Observable<EventDto> {
    return this.findById4$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventDto>): EventDto => r.body)
    );
  }

  /** Path part for operation `update4()` */
  static readonly Update4Path = '/event/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update4$Response(params: Update4$Params, context?: HttpContext): Observable<StrictHttpResponse<EventDto>> {
    return update4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update4(params: Update4$Params, context?: HttpContext): Observable<EventDto> {
    return this.update4$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventDto>): EventDto => r.body)
    );
  }

  /** Path part for operation `delete4()` */
  static readonly Delete4Path = '/event/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4$Response(params: Delete4$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4(params: Delete4$Params, context?: HttpContext): Observable<string> {
    return this.delete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `add4()` */
  static readonly Add4Path = '/event';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `add4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add4$Response(params: Add4$Params, context?: HttpContext): Observable<StrictHttpResponse<EventDto>> {
    return add4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `add4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add4(params: Add4$Params, context?: HttpContext): Observable<EventDto> {
    return this.add4$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventDto>): EventDto => r.body)
    );
  }

  /** Path part for operation `findAll4()` */
  static readonly FindAll4Path = '/event/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4$Response(params?: FindAll4$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EventDto>>> {
    return findAll4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4(params?: FindAll4$Params, context?: HttpContext): Observable<Array<EventDto>> {
    return this.findAll4$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EventDto>>): Array<EventDto> => r.body)
    );
  }

}
