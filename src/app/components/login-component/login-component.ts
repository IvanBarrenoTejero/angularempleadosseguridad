import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Login } from '../../models/login';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit {
  private _serviceAuth: ServiceAuthEmpleados = 
    inject(ServiceAuthEmpleados);
  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;
  public mensaje!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados
  ){}

  async logInEmpleado(): Promise<void>{
    let userName = this.cajaUser.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName, password);
    let response = await this._service.logInEmpleadoAsync(login);
    this.mensaje = "Ya estas dentro, a jugar";
    await this._serviceAuth.logInEmpleadoAsync(response.response);
    this._cdr.detectChanges();
  }

  logInEmpleadoObservable(): void {
    let userName = this.cajaUser.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName, password);
    this._service.logInEmpleadoObservable(login).subscribe(async(response) => {
      this.mensaje = "Ya estas dentro, a jugar";
      await this._serviceAuth.logInEmpleadoAsync(response.response);
      this._cdr.detectChanges();
    })
  }

  ngOnInit(): void {
    
  }
}
