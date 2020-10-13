import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PageErrorComponent } from './page-error/page-error.component';

import { APP_ROUTING } from "./app.routes";
import { PageTestComponent } from './page-test/page-test.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CabeceraComponent,
    FooterComponent,
    ContactComponent,
    PageErrorComponent,
    PageTestComponent,
    CatalogoComponent,
    ProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
