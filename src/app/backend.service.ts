import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  rutaRaiz = "http://localhost:3000";
  token: string = '';
  isAutenticate: boolean = false;

  constructor(private http: HttpClient) { 
    this.validarAutenticacion();
  }


  validarAutenticacion(): void{
    const token = localStorage.getItem('tokenedu');

    if(token) {
      this.token = token;
      this.isAutenticate = true;
    }
  }

  getRequest(controlador: string): Observable<any> {
    return this.http.get(this.rutaRaiz + '/' + controlador);
  }

  postRequest(controlador: string, datos: string) {

    // const headers = new Headers({'Content-Type':'application/json'});

    // 'Authorization': `Bearer ${auth_token}`
    return this.http.post(
      this.rutaRaiz + '/' + controlador,
      datos,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }


  autenticateRequest(credenciales: string) {

    // const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post(
      this.rutaRaiz + '/autenticar',
      credenciales,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }



}
