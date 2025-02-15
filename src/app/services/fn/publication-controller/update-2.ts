/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PublicationDto } from '../../models/publication-dto';

export interface Update2$Params {
  id: number;
      body: PublicationDto
}

export function update2(http: HttpClient, rootUrl: string, params: Update2$Params, context?: HttpContext): Observable<StrictHttpResponse<PublicationDto>> {
  const rb = new RequestBuilder(rootUrl, update2.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PublicationDto>;
    })
  );
}

update2.PATH = '/pub/{id}';
