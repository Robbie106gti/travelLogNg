import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingModes, LoadingService } from './loading.service';
import { environment } from '@env/environment';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClieantService {
  protected baseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) { }

  getData<T>(endpoint: string, loading?: boolean, params?: any): Observable<HttpEvent<T>> {
    const url: string = this.baseUrl + `/${endpoint}`;
    const hdr = Object.assign(
      {},
      {
      },
      params
    );
    if (loading) this.loadingService.setLoading(LoadingModes.indeterminate);
    return this.http.get<T>(url, hdr)
      .pipe(
        map(response => {
          if (loading) this.loadingService.setLoading();
          return response;
        }),
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
          //Handle the error here
          return throwError(err);    //Rethrow it back to component
        })
      );
  }
}
