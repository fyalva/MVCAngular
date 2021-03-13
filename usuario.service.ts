import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //todos:Todo[]
  todosUrl: string ="https://localhost:44393/api/usuarios";
 // todosLimit = '?_limit=5';
//url:"https://localhost:44393/api/usuarios";
  constructor( private http:HttpClient) { }
  getTodos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`this.todosUrl`);
  }
/*
  getUsuario(): Observable<Usuario[]>{
  let header= new HttpHeaders().set('Content-Type','application/json');
   return this.http.get<Usuario[]>(this.url,{headers:header});
   //return this.getUsuario();  return this.http.get<Persona[]>(this.url);, {headers:header}

  }*/
}
