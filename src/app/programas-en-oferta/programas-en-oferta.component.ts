import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


interface Programa {
  nombre: string;
  modalidad: string
}

@Component({
  selector: 'app-programas-en-oferta',
  templateUrl: './programas-en-oferta.component.html',
  styleUrls: ['./programas-en-oferta.component.scss']
})
export class ProgramasEnOfertaComponent implements OnInit {

  listaProgramas: Programa[] = [];

  constructor(private http: HttpClient) { 
    const ruta = "http://localhost:3000/programa-academicos";
    this.getProgramasBackend(ruta).subscribe(
      (response)=> {
        // console.log(response);
        this.listaProgramas = response;
      },
      (error) => {
        console.log(error);
      },
      () => {
      }
    )
  }

  ngOnInit(): void {
  }


  getProgramasBackend(ruta: string): Observable<any>{
    return this.http.get(ruta);
  }


}
