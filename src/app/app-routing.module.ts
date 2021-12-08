import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramasEnOfertaComponent } from './programas-en-oferta/programas-en-oferta.component';
import{ AdminUsuariosComponent} from './admin/admin-usuarios/admin-usuarios.component';
import { GuardAutenticarGuard } from './guard-autenticar.guard';


const routes: Routes = [
  {
    path: '', component: LoginComponent  
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'programas-en-oferta', component: ProgramasEnOfertaComponent,
    canActivate: [GuardAutenticarGuard] 
  },
  {
    path: 'admin',
    canActivateChild: [GuardAutenticarGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
