import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/service.auth';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajapassword') cajaPassword!: ElementRef;
  public mensaje!: string;

  constructor(
    private _serviceAuth: AuthService,
    private _cdr: ChangeDetectorRef,
  ) {}

  async login() {
    let nombre = this.cajaNombre.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let auth = { nombre, password };
    try {
      let response = await this._serviceAuth.login(auth);
      let token = response.token;
      localStorage.setItem('token', token);
      this.mensaje = 'Login successful';
    } catch (error) {
      this.mensaje = 'Login failed';
    }
    this._cdr.detectChanges();
  }
}
