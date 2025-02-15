/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AutorisationSortieDto } from '../../models/autorisation-sortie-dto';

export interface Add14$Params {
      body: AutorisationSortieDto
}

export function add14(http: HttpClient, rootUrl: string, params: Add14$Params, context?: HttpContext): Observable<StrictHttpResponse<AutorisationSortieDto>> {
  const rb = new RequestBuilder(rootUrl, add14.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AutorisationSortieDto>;
    })
  );
}

add14.PATH = '/AutorisationS';
