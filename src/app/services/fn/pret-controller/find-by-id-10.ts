/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PretDto } from '../../models/pret-dto';

export interface FindById10$Params {
  id: number;
}

export function findById10(http: HttpClient, rootUrl: string, params: FindById10$Params, context?: HttpContext): Observable<StrictHttpResponse<PretDto>> {
  const rb = new RequestBuilder(rootUrl, findById10.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PretDto>;
    })
  );
}

findById10.PATH = '/Pret/{id}';
