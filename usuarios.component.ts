import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {UsuarioService} from '../../services/usuario.service'
import {Usuario} from '../../models/usuario.model'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private usuarioService:UsuarioService) { };

  ngOnInit(): void {
    /*
    this.usuarioService.getTodos().subscribe(t => this.usuarios = t);
  
  this.usuarioService.getUsuario().subscribe(resp => 
    {
      console.log(resp);
      this.usuarios=resp;
    });*/
  }

}
