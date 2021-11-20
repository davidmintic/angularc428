import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  rutaRaiz = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getRequest(controlador: string): Observable<any>{
    return this.http.get(this.rutaRaiz + '/' + controlador);
  }

  
}
