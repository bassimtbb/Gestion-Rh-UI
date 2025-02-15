/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { add1 } from '../fn/superieure-h-controller/add-1';
import { Add1$Params } from '../fn/superieure-h-controller/add-1';
import { delete1 } from '../fn/superieure-h-controller/delete-1';
import { Delete1$Params } from '../fn/superieure-h-controller/delete-1';
import { findAll1 } from '../fn/superieure-h-controller/find-all-1';
import { FindAll1$Params } from '../fn/superieure-h-controller/find-all-1';
import { findById1 } from '../fn/superieure-h-controller/find-by-id-1';
import { FindById1$Params } from '../fn/superieure-h-controller/find-by-id-1';
import { SuperieureHDto } from '../models/superieure-h-dto';
import { update1 } from '../fn/superieure-h-controller/update-1';
import { Update1$Params } from '../fn/superieure-h-controller/update-1';

@Injectable({ providedIn: 'root' })
export class SuperieureHControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById1()` */
  static readonly FindById1Path = '/suph/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<SuperieureHDto>> {
    return findById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: FindById1$Params, context?: HttpContext): Observable<SuperieureHDto> {
    return this.findById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<SuperieureHDto>): SuperieureHDto => r.body)
    );
  }

  /** Path part for operation `update1()` */
  static readonly Update1Path = '/suph/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1$Response(params: Update1$Params, context?: HttpContext): Observable<StrictHttpResponse<SuperieureHDto>> {
    return update1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1(params: Update1$Params, context?: HttpContext): Observable<SuperieureHDto> {
    return this.update1$Response(params, context).pipe(
      map((r: StrictHttpResponse<SuperieureHDto>): SuperieureHDto => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/suph/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<string> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `add1()` */
  static readonly Add1Path = '/suph';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `add1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add1$Response(params: Add1$Params, context?: HttpContext): Observable<StrictHttpResponse<SuperieureHDto>> {
    return add1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `add1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add1(params: Add1$Params, context?: HttpContext): Observable<SuperieureHDto> {
    return this.add1$Response(params, context).pipe(
      map((r: StrictHttpResponse<SuperieureHDto>): SuperieureHDto => r.body)
    );
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/suph/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SuperieureHDto>>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<Array<SuperieureHDto>> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SuperieureHDto>>): Array<SuperieureHDto> => r.body)
    );
  }

}
