/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormationDto } from '../../models/formation-dto';

export interface FindAll3$Params {
}

export function findAll3(http: HttpClient, rootUrl: string, params?: FindAll3$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FormationDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll3.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FormationDto>>;
    })
  );
}

findAll3.PATH = '/formation/all';
