import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados,
    private _router: Router
  ){}

  async ngOnInit(): Promise<void> {
    this.empleado = await this._service.getPerfilEmpleadoAsync();
    this._cdr.detectChanges();    
    // if (sessionStorage.getItem("TOKEN") == null){
    //   this._router.navigate(["/login"])
    // }else{
    //   this.empleado = await this._service.getPerfilEmpleadoAsync();
    //   this._cdr.detectChanges();
    // }
  }
}
