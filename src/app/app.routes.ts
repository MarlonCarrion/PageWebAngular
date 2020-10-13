import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from './heroes/heroes.component';
import { ContactComponent } from "./contact/contact.component";
import { PageErrorComponent } from "./page-error/page-error.component";
import { PageTestComponent } from "./page-test/page-test.component";
import { CatalogoComponent} from "./catalogo/catalogo.component"
import { ProductosComponent } from './productos/productos.component';

const APP_ROUTES: Routes=[
    {path: '', component:PageTestComponent},
    {path: 'contact-us', component: ContactComponent},
    {path: 'catalogo', component:CatalogoComponent },
    {path: 'productos', component: ProductosComponent},
    {path: '**', component: PageErrorComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

