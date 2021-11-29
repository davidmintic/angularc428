import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {


  tiposDeUsuarios = [
    {
      codigo: 'estudiante',
      texto: 'Estudiante',
    },
    {
      codigo: 'docente',
      texto: 'Docente',
    },
    {
      codigo: 'administrador',
      texto: 'Administrador',
    }
  ];

  listaUsuarios: any = [];

  openModalCrear = false;
  formGroupUsuario;
  tipo: any = '';

  constructor(
    private servicioBackend: BackendService,
    private formBuilder: FormBuilder
  ) {

    this.obtenerUsuarios();

    this.formGroupUsuario = this.formBuilder.group(
      {
        correo: ['', Validators.required],
        nombre: ['', Validators.required],
        tipo: ['estudiante'],
        contrasenia: ['ssassdsds']

      }
    );

  }

  ngOnInit(): void {
  }


  crearUsuario() {
    const usuario = this.formGroupUsuario.getRawValue();
    usuario['tipo'] = this.tipo;

    this.servicioBackend.postRequest('usuarios', JSON.stringify(usuario)).subscribe(
      {
        next: (datos) => {
          this.listaUsuarios.push(usuario);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {

        }
      }

    );
  }

  obtenerUsuarios(): void {
    this.servicioBackend.getRequest('usuarios').subscribe(
      {
        next: (datos) => {
          this.listaUsuarios = datos;
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {

        }
      }

    )
  }


  abrirFormularioCrear(): void {
    this.openModalCrear = !this.openModalCrear;
  }

}
