/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormationDto } from '../../models/formation-dto';

export interface Add3$Params {
      body: FormationDto
}

export function add3(http: HttpClient, rootUrl: string, params: Add3$Params, context?: HttpContext): Observable<StrictHttpResponse<FormationDto>> {
  const rb = new RequestBuilder(rootUrl, add3.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FormationDto>;
    })
  );
}

add3.PATH = '/formation';
