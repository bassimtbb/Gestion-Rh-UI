/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DepartementDto } from '../../models/departement-dto';

export interface Add6$Params {
      body: DepartementDto
}

export function add6(http: HttpClient, rootUrl: string, params: Add6$Params, context?: HttpContext): Observable<StrictHttpResponse<DepartementDto>> {
  const rb = new RequestBuilder(rootUrl, add6.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DepartementDto>;
    })
  );
}

add6.PATH = '/department';
