import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right: 3px;
    }`
  ]
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService:PaisService ) { }

  getClase(region:string){
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region:string){
    //para no recargar nada si no ha cambiado la región activa
    if(region === this.regionActiva ){ return }

    this.regionActiva = region;
    this.paisService.buscarPorRegion(region)
    .subscribe( (paises) => {
      this.paises = paises;

    }, (err) => {
      this.paises = [];
      console.log('Error');
      console.info(err);
    })
}




}
