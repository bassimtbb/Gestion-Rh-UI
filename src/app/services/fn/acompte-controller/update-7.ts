/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AcompteDto } from '../../models/acompte-dto';

export interface Update7$Params {
  id: number;
      body: AcompteDto
}

export function update7(http: HttpClient, rootUrl: string, params: Update7$Params, context?: HttpContext): Observable<StrictHttpResponse<AcompteDto>> {
  const rb = new RequestBuilder(rootUrl, update7.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AcompteDto>;
    })
  );
}

update7.PATH = '/acompte/{id}';
