import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { SidebarService } from '../sidebar.service';

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

  constructor(
    private servicioSideBar: SidebarService,
    private servicioBackend: BackendService
    ) { 

      this.servicioSideBar.rutaActual = 'programas-en-oferta';
   
    this.servicioBackend.getRequest('programa-academicos').subscribe(
      {
        next: (datos)=> {
          this.listaProgramas = datos;
        },
        error: (e)=> {
          console.log(e);
        },
        complete: ()=>{

        }
      }      
    );
  }

  ngOnInit(): void {
    console.log('inicio');
  }


  ngAfterContentInit(): void {
    console.log('se pintó');
  }

  ngAfterViewInit(): void {
    console.log('se pintó completamente');
  }





}
