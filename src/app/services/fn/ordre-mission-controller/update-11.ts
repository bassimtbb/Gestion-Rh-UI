/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrdreMissionDto } from '../../models/ordre-mission-dto';

export interface Update11$Params {
  id: number;
      body: OrdreMissionDto
}

export function update11(http: HttpClient, rootUrl: string, params: Update11$Params, context?: HttpContext): Observable<StrictHttpResponse<OrdreMissionDto>> {
  const rb = new RequestBuilder(rootUrl, update11.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrdreMissionDto>;
    })
  );
}

update11.PATH = '/OrdreMission/{id}';
