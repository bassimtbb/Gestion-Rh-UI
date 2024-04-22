/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { add8 } from '../fn/autorisation-travail-sup-controller/add-8';
import { Add8$Params } from '../fn/autorisation-travail-sup-controller/add-8';
import { AutorisationTravailSupDto } from '../models/autorisation-travail-sup-dto';
import { delete8 } from '../fn/autorisation-travail-sup-controller/delete-8';
import { Delete8$Params } from '../fn/autorisation-travail-sup-controller/delete-8';
import { findAll8 } from '../fn/autorisation-travail-sup-controller/find-all-8';
import { FindAll8$Params } from '../fn/autorisation-travail-sup-controller/find-all-8';
import { findById8 } from '../fn/autorisation-travail-sup-controller/find-by-id-8';
import { FindById8$Params } from '../fn/autorisation-travail-sup-controller/find-by-id-8';
import { update8 } from '../fn/autorisation-travail-sup-controller/update-8';
import { Update8$Params } from '../fn/autorisation-travail-sup-controller/update-8';

@Injectable({ providedIn: 'root' })
export class AutorisationTravailSupControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById8()` */
  static readonly FindById8Path = '/TravailSup/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8$Response(params: FindById8$Params, context?: HttpContext): Observable<StrictHttpResponse<AutorisationTravailSupDto>> {
    return findById8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8(params: FindById8$Params, context?: HttpContext): Observable<AutorisationTravailSupDto> {
    return this.findById8$Response(params, context).pipe(
      map((r: StrictHttpResponse<AutorisationTravailSupDto>): AutorisationTravailSupDto => r.body)
    );
  }

  /** Path part for operation `update8()` */
  static readonly Update8Path = '/TravailSup/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update8()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update8$Response(params: Update8$Params, context?: HttpContext): Observable<StrictHttpResponse<AutorisationTravailSupDto>> {
    return update8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update8$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update8(params: Update8$Params, context?: HttpContext): Observable<AutorisationTravailSupDto> {
    return this.update8$Response(params, context).pipe(
      map((r: StrictHttpResponse<AutorisationTravailSupDto>): AutorisationTravailSupDto => r.body)
    );
  }

  /** Path part for operation `delete8()` */
  static readonly Delete8Path = '/TravailSup/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete8()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8$Response(params: Delete8$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8(params: Delete8$Params, context?: HttpContext): Observable<string> {
    return this.delete8$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `add8()` */
  static readonly Add8Path = '/TravailSup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `add8()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add8$Response(params: Add8$Params, context?: HttpContext): Observable<StrictHttpResponse<AutorisationTravailSupDto>> {
    return add8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `add8$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  add8(params: Add8$Params, context?: HttpContext): Observable<AutorisationTravailSupDto> {
    return this.add8$Response(params, context).pipe(
      map((r: StrictHttpResponse<AutorisationTravailSupDto>): AutorisationTravailSupDto => r.body)
    );
  }

  /** Path part for operation `findAll8()` */
  static readonly FindAll8Path = '/TravailSup/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8$Response(params?: FindAll8$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AutorisationTravailSupDto>>> {
    return findAll8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8(params?: FindAll8$Params, context?: HttpContext): Observable<Array<AutorisationTravailSupDto>> {
    return this.findAll8$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AutorisationTravailSupDto>>): Array<AutorisationTravailSupDto> => r.body)
    );
  }

}
