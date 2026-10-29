import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  constructor(private _router: Router) {}
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  public contador = this._serviceSignal.contador;

  logOutEmpleado(): void {
    sessionStorage.removeItem('TOKEN');
    void this._router.navigate(['/login']);
  }
}
