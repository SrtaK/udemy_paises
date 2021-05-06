import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    //cuando navegue a la url vacía
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    //ruta de la region
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    //ruta pais/id del pais
    path:'pais/:id',
    component: VerPaisComponent
  },
  {
    //cualquier otra ruta, estaría guay crear aquí el 404 component
    path:'**',
    redirectTo:''
  }
]


@NgModule({
  imports:[
    //routes están definidas arriba
    RouterModule.forRoot(routes)

  ],
  exports:[
    RouterModule

  ]
})


export class AppRoutingModule
{}
