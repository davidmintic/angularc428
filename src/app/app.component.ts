import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from './backend.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-edufree-g28';

  constructor(
    public servicioBackend: BackendService,
    public servicioSideBar: SidebarService,
    private router: Router
  ) {

  }

  cerrarSesion() {
    this.servicioBackend.token = '';
    this.servicioBackend.isAutenticate = false;
    localStorage.removeItem('tokenedu');
    this.router.navigate(['/login']);
  }

}
