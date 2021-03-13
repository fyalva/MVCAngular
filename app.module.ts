import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import{Observable} from 'rxjs'
import{ HttpClient, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitasComponent } from './component/visitas/visitas.component';
import { ListaVisitasComponent } from './component/visitas/lista-visitas/lista-visitas.component';
import { VisitaToursComponent } from './component/visitas/visita-tours/visita-tours.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { UsuarioService } from './services/usuario.service';
import { from } from 'rxjs';
//import {HttpClientModule}from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VisitasComponent,
    ListaVisitasComponent,
    VisitaToursComponent,
    FooterComponent,
    NavbarComponent,
    UsuariosComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
