import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

interface Usuario {
  nombre: string,
  apellidos: string
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: any;
  titulo: string = 'Iniciar sesión';

  usuario: Usuario = { nombre: '', apellidos: '' };
  usuario2: Usuario = { nombre: '', apellidos: '' };

  constructor(private formBuilder: FormBuilder, private servicioBackend: BackendService) {

    this.formLogin = this.formBuilder.group(
      {
        correo: ['', Validators.required],
        contrasenia: ['', Validators.required]
      }
    );

  }


  ngOnInit(): void {

  }

  login(): void {

    const contraseniaEncriptada = Md5.hashStr(this.formLogin.controls.contrasenia.value);
    const credenciales = this.formLogin.getRawValue();
    credenciales.contrasenia = contraseniaEncriptada;

    this.servicioBackend.autenticateRequest(JSON.stringify(credenciales)).subscribe(
      {
        next: (datos: any) => {
          const token =  datos['tk'];
          localStorage.setItem('tokenedu', token);
          this.servicioBackend.isAutenticate = true;
          this.servicioBackend.token = token;
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {

        }
      }
    );
  }




}
