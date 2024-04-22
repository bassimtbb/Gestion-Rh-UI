/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { add2 } from '../fn/publication-controller/add-2';
import { Add2$Params } from '../fn/publication-controller/add-2';
import { delete2 } from '../fn/publication-controller/delete-2';
import { Delete2$Params } from '../fn/publication-controller/delete-2';
import { findAll2 } from '../fn/publication-controller/find-all-2';
import { FindAll2$Params } from '../fn/publication-controller/find-all-2';
import { findById2 } from '../fn/publication-controller/find-by-id-2';
import { FindById2$Params } from '../fn/publication-controller/find-by-id-2';
import { PublicationDto } from '../models/publication-dto';
import { update2 } from '../fn/publication-controller/update-2';
import { Update2$Params } from '../fn/publication-controller/update-2';

@Injectable({ providedIn: 'root' })
export class PublicationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById2()` */
  static readonly FindById2Path = '/pub/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<PublicationDto>> {
    return findById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: FindById2$Params, context?: HttpContext): Observable<PublicationDto> {
    return this.findById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<PublicationDto>): PublicationDto => r.body)
    );
  }

  /** Path part for operation `update2()` */
  static readonly Update2Path = '/pub/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update2$Response(params: Update2$Params, context?: HttpContext): Observable<StrictHttpResponse<PublicationDto>> {
    return update2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update2(params: Update2$Params, context?: HttpContext): Observable<PublicationDto> {
    return this.update2$Response(params, context).pipe(
      map((r: StrictHttpResponse<PublicationDto>): PublicationDto => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/pub/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<string> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `add2()` */
  static readonly Add2Path = '/pub';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `add2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add2$Response(params: Add2$Params, context?: HttpContext): Observable<StrictHttpResponse<PublicationDto>> {
    return add2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `add2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add2(params: Add2$Params, context?: HttpContext): Observable<PublicationDto> {
    return this.add2$Response(params, context).pipe(
      map((r: StrictHttpResponse<PublicationDto>): PublicationDto => r.body)
    );
  }

  /** Path part for operation `findAll2()` */
  static readonly FindAll2Path = '/pub/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: FindAll2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
    return findAll2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: FindAll2$Params, context?: HttpContext): Observable<Array<PublicationDto>> {
    return this.findAll2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PublicationDto>>): Array<PublicationDto> => r.body)
    );
  }

}
