/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { add11 } from '../fn/ordre-mission-controller/add-11';
import { Add11$Params } from '../fn/ordre-mission-controller/add-11';
import { delete11 } from '../fn/ordre-mission-controller/delete-11';
import { Delete11$Params } from '../fn/ordre-mission-controller/delete-11';
import { findAll11 } from '../fn/ordre-mission-controller/find-all-11';
import { FindAll11$Params } from '../fn/ordre-mission-controller/find-all-11';
import { findById11 } from '../fn/ordre-mission-controller/find-by-id-11';
import { FindById11$Params } from '../fn/ordre-mission-controller/find-by-id-11';
import { OrdreMissionDto } from '../models/ordre-mission-dto';
import { update11 } from '../fn/ordre-mission-controller/update-11';
import { Update11$Params } from '../fn/ordre-mission-controller/update-11';

@Injectable({ providedIn: 'root' })
export class OrdreMissionControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById11()` */
  static readonly FindById11Path = '/OrdreMission/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById11()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById11$Response(params: FindById11$Params, context?: HttpContext): Observable<StrictHttpResponse<OrdreMissionDto>> {
    return findById11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById11(params: FindById11$Params, context?: HttpContext): Observable<OrdreMissionDto> {
    return this.findById11$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrdreMissionDto>): OrdreMissionDto => r.body)
    );
  }

  /** Path part for operation `update11()` */
  static readonly Update11Path = '/OrdreMission/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update11()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update11$Response(params: Update11$Params, context?: HttpContext): Observable<StrictHttpResponse<OrdreMissionDto>> {
    return update11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update11$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update11(params: Update11$Params, context?: HttpContext): Observable<OrdreMissionDto> {
    return this.update11$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrdreMissionDto>): OrdreMissionDto => r.body)
    );
  }

  /** Path part for operation `delete11()` */
  static readonly Delete11Path = '/OrdreMission/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete11()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete11$Response(params: Delete11$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete11(params: Delete11$Params, context?: HttpContext): Observable<string> {
    return this.delete11$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `add11()` */
  static readonly Add11Path = '/OrdreMission';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `add11()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add11$Response(params: Add11$Params, context?: HttpContext): Observable<StrictHttpResponse<OrdreMissionDto>> {
    return add11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `add11$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add11(params: Add11$Params, context?: HttpContext): Observable<OrdreMissionDto> {
    return this.add11$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrdreMissionDto>): OrdreMissionDto => r.body)
    );
  }

  /** Path part for operation `findAll11()` */
  static readonly FindAll11Path = '/OrdreMission/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll11()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll11$Response(params?: FindAll11$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrdreMissionDto>>> {
    return findAll11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll11(params?: FindAll11$Params, context?: HttpContext): Observable<Array<OrdreMissionDto>> {
    return this.findAll11$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrdreMissionDto>>): Array<OrdreMissionDto> => r.body)
    );
  }

}
