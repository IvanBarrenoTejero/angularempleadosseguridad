import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Auth } from '../models/Auth';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}

  api = environment.apiEmpleadosAuth;

  async login(auth: Auth): Promise<any> {
    let json = JSON.stringify(auth);
    let header = new HttpHeaders().set('content-type', 'application/json');
    let request = 'auth/login';
    return firstValueFrom(this._http.post(this.api + request, json, { headers: header }));
  }

  async findPerfilEmpleado(token: string): Promise<any> {
    let header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    let request = 'api/empleados/perfilempleados';
    return firstValueFrom(this._http.get(this.api + request, { headers: header }));
  }
}
