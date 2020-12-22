import { Usuario } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class UserService {

  usuario: Usuario;

  constructor() { }

  instUsuario(usuario: Usuario): void{

    this.usuario = usuario;
  }

  retornaUsuario(): any{
    return this.usuario;
  }


}
