/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AcompteDto } from '../models/acompte-dto';
import { add7 } from '../fn/acompte-controller/add-7';
import { Add7$Params } from '../fn/acompte-controller/add-7';
import { delete7 } from '../fn/acompte-controller/delete-7';
import { Delete7$Params } from '../fn/acompte-controller/delete-7';
import { findAll7 } from '../fn/acompte-controller/find-all-7';
import { FindAll7$Params } from '../fn/acompte-controller/find-all-7';
import { findById7 } from '../fn/acompte-controller/find-by-id-7';
import { FindById7$Params } from '../fn/acompte-controller/find-by-id-7';
import { update7 } from '../fn/acompte-controller/update-7';
import { Update7$Params } from '../fn/acompte-controller/update-7';

@Injectable({ providedIn: 'root' })
export class AcompteControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById7()` */
  static readonly FindById7Path = '/acompte/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7$Response(params: FindById7$Params, context?: HttpContext): Observable<StrictHttpResponse<AcompteDto>> {
    return findById7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7(params: FindById7$Params, context?: HttpContext): Observable<AcompteDto> {
    return this.findById7$Response(params, context).pipe(
      map((r: StrictHttpResponse<AcompteDto>): AcompteDto => r.body)
    );
  }

  /** Path part for operation `update7()` */
  static readonly Update7Path = '/acompte/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update7()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update7$Response(params: Update7$Params, context?: HttpContext): Observable<StrictHttpResponse<AcompteDto>> {
    return update7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update7$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update7(params: Update7$Params, context?: HttpContext): Observable<AcompteDto> {
    return this.update7$Response(params, context).pipe(
      map((r: StrictHttpResponse<AcompteDto>): AcompteDto => r.body)
    );
  }

  /** Path part for operation `delete7()` */
  static readonly Delete7Path = '/acompte/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete7()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7$Response(params: Delete7$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7(params: Delete7$Params, context?: HttpContext): Observable<string> {
    return this.delete7$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `add7()` */
  static readonly Add7Path = '/acompte';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `add7()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add7$Response(params: Add7$Params, context?: HttpContext): Observable<StrictHttpResponse<AcompteDto>> {
    return add7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `add7$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add7(params: Add7$Params, context?: HttpContext): Observable<AcompteDto> {
    return this.add7$Response(params, context).pipe(
      map((r: StrictHttpResponse<AcompteDto>): AcompteDto => r.body)
    );
  }

  /** Path part for operation `findAll7()` */
  static readonly FindAll7Path = '/acompte/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7$Response(params?: FindAll7$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AcompteDto>>> {
    return findAll7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7(params?: FindAll7$Params, context?: HttpContext): Observable<Array<AcompteDto>> {
    return this.findAll7$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AcompteDto>>): Array<AcompteDto> => r.body)
    );
  }

}
