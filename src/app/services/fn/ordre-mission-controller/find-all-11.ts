/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrdreMissionDto } from '../../models/ordre-mission-dto';

export interface FindAll11$Params {
}

export function findAll11(http: HttpClient, rootUrl: string, params?: FindAll11$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrdreMissionDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll11.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OrdreMissionDto>>;
    })
  );
}

findAll11.PATH = '/OrdreMission/all';
