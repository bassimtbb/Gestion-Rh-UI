/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DepartementDto } from '../../models/departement-dto';

export interface FindById6$Params {
  id: number;
}

export function findById6(http: HttpClient, rootUrl: string, params: FindById6$Params, context?: HttpContext): Observable<StrictHttpResponse<DepartementDto>> {
  const rb = new RequestBuilder(rootUrl, findById6.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

findById6.PATH = '/department/{id}';
