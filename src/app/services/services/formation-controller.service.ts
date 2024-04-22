/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { add3 } from '../fn/formation-controller/add-3';
import { Add3$Params } from '../fn/formation-controller/add-3';
import { delete3 } from '../fn/formation-controller/delete-3';
import { Delete3$Params } from '../fn/formation-controller/delete-3';
import { findAll3 } from '../fn/formation-controller/find-all-3';
import { FindAll3$Params } from '../fn/formation-controller/find-all-3';
import { findById3 } from '../fn/formation-controller/find-by-id-3';
import { FindById3$Params } from '../fn/formation-controller/find-by-id-3';
import { FormationDto } from '../models/formation-dto';
import { update3 } from '../fn/formation-controller/update-3';
import { Update3$Params } from '../fn/formation-controller/update-3';

@Injectable({ providedIn: 'root' })
export class FormationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById3()` */
  static readonly FindById3Path = '/formation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3$Response(params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<FormationDto>> {
    return findById3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3(params: FindById3$Params, context?: HttpContext): Observable<FormationDto> {
    return this.findById3$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormationDto>): FormationDto => r.body)
    );
  }

  /** Path part for operation `update3()` */
  static readonly Update3Path = '/formation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update3$Response(params: Update3$Params, context?: HttpContext): Observable<StrictHttpResponse<FormationDto>> {
    return update3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update3(params: Update3$Params, context?: HttpContext): Observable<FormationDto> {
    return this.update3$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormationDto>): FormationDto => r.body)
    );
  }

  /** Path part for operation `delete3()` */
  static readonly Delete3Path = '/formation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3$Response(params: Delete3$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3(params: Delete3$Params, context?: HttpContext): Observable<string> {
    return this.delete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `add3()` */
  static readonly Add3Path = '/formation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `add3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add3$Response(params: Add3$Params, context?: HttpContext): Observable<StrictHttpResponse<FormationDto>> {
    return add3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `add3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add3(params: Add3$Params, context?: HttpContext): Observable<FormationDto> {
    return this.add3$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormationDto>): FormationDto => r.body)
    );
  }

  /** Path part for operation `findAll3()` */
  static readonly FindAll3Path = '/formation/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3$Response(params?: FindAll3$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FormationDto>>> {
    return findAll3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3(params?: FindAll3$Params, context?: HttpContext): Observable<Array<FormationDto>> {
    return this.findAll3$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FormationDto>>): Array<FormationDto> => r.body)
    );
  }

}
