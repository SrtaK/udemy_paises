import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino:string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService:PaisService ) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    //como buscarPais devuelve un observable tengo que suscribirme

    this.paisService.buscarCapital(this.termino)
      //un subscribe tiene varios argumentos que poder mandar:
      //next (se obvia la definición)
      .subscribe( (paises) => {
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
        console.log('Error');
        console.info(err);
      })
  }

}
