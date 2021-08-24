import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pelicula/:id/:pag', component: PeliculaComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
