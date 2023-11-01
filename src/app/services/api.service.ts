import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi: string = 'http://localhost:8081';
  private endPointAll: string = '/api/produtos';

  constructor(private http: HttpClient) { }

  produtosAll(): Observable<any> {

    return this.http.get(`${this.urlApi}${this.endPointAll}`);

  }

}
