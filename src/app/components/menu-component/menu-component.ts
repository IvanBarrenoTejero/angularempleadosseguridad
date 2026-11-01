import { Component, inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  private _serviceAuth: ServiceAuthEmpleados = 
    inject(ServiceAuthEmpleados);
  public usuario = this._serviceAuth.user;
  public contador = this._serviceSignal.contador;

  logOutEmpleado(): void {
    this._serviceAuth.logOutEmpleado();
  }
}
