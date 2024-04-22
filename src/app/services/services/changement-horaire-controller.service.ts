/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { add13 } from '../fn/changement-horaire-controller/add-13';
import { Add13$Params } from '../fn/changement-horaire-controller/add-13';
import { ChangementHoraireDto } from '../models/changement-horaire-dto';
import { delete13 } from '../fn/changement-horaire-controller/delete-13';
import { Delete13$Params } from '../fn/changement-horaire-controller/delete-13';
import { findAll13 } from '../fn/changement-horaire-controller/find-all-13';
import { FindAll13$Params } from '../fn/changement-horaire-controller/find-all-13';
import { findById13 } from '../fn/changement-horaire-controller/find-by-id-13';
import { FindById13$Params } from '../fn/changement-horaire-controller/find-by-id-13';
import { update13 } from '../fn/changement-horaire-controller/update-13';
import { Update13$Params } from '../fn/changement-horaire-controller/update-13';

@Injectable({ providedIn: 'root' })
export class ChangementHoraireControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById13()` */
  static readonly FindById13Path = '/ChangementH/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById13()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById13$Response(params: FindById13$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangementHoraireDto>> {
    return findById13(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById13(params: FindById13$Params, context?: HttpContext): Observable<ChangementHoraireDto> {
    return this.findById13$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangementHoraireDto>): ChangementHoraireDto => r.body)
    );
  }

  /** Path part for operation `update13()` */
  static readonly Update13Path = '/ChangementH/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update13()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update13$Response(params: Update13$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangementHoraireDto>> {
    return update13(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update13$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update13(params: Update13$Params, context?: HttpContext): Observable<ChangementHoraireDto> {
    return this.update13$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangementHoraireDto>): ChangementHoraireDto => r.body)
    );
  }

  /** Path part for operation `delete13()` */
  static readonly Delete13Path = '/ChangementH/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete13()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete13$Response(params: Delete13$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete13(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete13(params: Delete13$Params, context?: HttpContext): Observable<string> {
    return this.delete13$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `add13()` */
  static readonly Add13Path = '/ChangementH';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `add13()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add13$Response(params: Add13$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangementHoraireDto>> {
    return add13(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `add13$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add13(params: Add13$Params, context?: HttpContext): Observable<ChangementHoraireDto> {
    return this.add13$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangementHoraireDto>): ChangementHoraireDto => r.body)
    );
  }

  /** Path part for operation `findAll13()` */
  static readonly FindAll13Path = '/ChangementH/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll13()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll13$Response(params?: FindAll13$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ChangementHoraireDto>>> {
    return findAll13(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll13(params?: FindAll13$Params, context?: HttpContext): Observable<Array<ChangementHoraireDto>> {
    return this.findAll13$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ChangementHoraireDto>>): Array<ChangementHoraireDto> => r.body)
    );
  }

}
