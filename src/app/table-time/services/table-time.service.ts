import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableTimeService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const jsonUrl = 'assets/json/dummy.json';
    return this.http.get<any>(jsonUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return [];
  }
}
