/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EventDto } from '../../models/event-dto';

export interface Add4$Params {
      body: EventDto
}

export function add4(http: HttpClient, rootUrl: string, params: Add4$Params, context?: HttpContext): Observable<StrictHttpResponse<EventDto>> {
  const rb = new RequestBuilder(rootUrl, add4.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EventDto>;
    })
  );
}

add4.PATH = '/event';
