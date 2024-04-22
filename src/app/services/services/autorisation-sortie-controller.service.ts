/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { add14 } from '../fn/autorisation-sortie-controller/add-14';
import { Add14$Params } from '../fn/autorisation-sortie-controller/add-14';
import { AutorisationSortieDto } from '../models/autorisation-sortie-dto';
import { delete14 } from '../fn/autorisation-sortie-controller/delete-14';
import { Delete14$Params } from '../fn/autorisation-sortie-controller/delete-14';
import { findAll14 } from '../fn/autorisation-sortie-controller/find-all-14';
import { FindAll14$Params } from '../fn/autorisation-sortie-controller/find-all-14';
import { findById14 } from '../fn/autorisation-sortie-controller/find-by-id-14';
import { FindById14$Params } from '../fn/autorisation-sortie-controller/find-by-id-14';
import { update14 } from '../fn/autorisation-sortie-controller/update-14';
import { Update14$Params } from '../fn/autorisation-sortie-controller/update-14';

@Injectable({ providedIn: 'root' })
export class AutorisationSortieControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById14()` */
  static readonly FindById14Path = '/AutorisationS/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById14()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById14$Response(params: FindById14$Params, context?: HttpContext): Observable<StrictHttpResponse<AutorisationSortieDto>> {
    return findById14(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById14$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById14(params: FindById14$Params, context?: HttpContext): Observable<AutorisationSortieDto> {
    return this.findById14$Response(params, context).pipe(
      map((r: StrictHttpResponse<AutorisationSortieDto>): AutorisationSortieDto => r.body)
    );
  }

  /** Path part for operation `update14()` */
  static readonly Update14Path = '/AutorisationS/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update14()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update14$Response(params: Update14$Params, context?: HttpContext): Observable<StrictHttpResponse<AutorisationSortieDto>> {
    return update14(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update14$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update14(params: Update14$Params, context?: HttpContext): Observable<AutorisationSortieDto> {
    return this.update14$Response(params, context).pipe(
      map((r: StrictHttpResponse<AutorisationSortieDto>): AutorisationSortieDto => r.body)
    );
  }

  /** Path part for operation `delete14()` */
  static readonly Delete14Path = '/AutorisationS/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete14()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete14$Response(params: Delete14$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete14(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete14$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete14(params: Delete14$Params, context?: HttpContext): Observable<string> {
    return this.delete14$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `add14()` */
  static readonly Add14Path = '/AutorisationS';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `add14()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add14$Response(params: Add14$Params, context?: HttpContext): Observable<StrictHttpResponse<AutorisationSortieDto>> {
    return add14(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `add14$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add14(params: Add14$Params, context?: HttpContext): Observable<AutorisationSortieDto> {
    return this.add14$Response(params, context).pipe(
      map((r: StrictHttpResponse<AutorisationSortieDto>): AutorisationSortieDto => r.body)
    );
  }

  /** Path part for operation `findAll14()` */
  static readonly FindAll14Path = '/AutorisationS/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll14()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll14$Response(params?: FindAll14$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AutorisationSortieDto>>> {
    return findAll14(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll14$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll14(params?: FindAll14$Params, context?: HttpContext): Observable<Array<AutorisationSortieDto>> {
    return this.findAll14$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AutorisationSortieDto>>): Array<AutorisationSortieDto> => r.body)
    );
  }

}
