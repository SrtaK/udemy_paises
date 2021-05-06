import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino:string = '';
  hayError: boolean = false;

  constructor( private paisService:PaisService) { }

  buscar(){
    console.log(this.termino);
    this.hayError = false;
    //como buscarPais devuelve un observable tengo que suscribirme

    this.paisService.buscarPais(this.termino)
      //un subscribe tiene varios argumentos que poder mandar:
      //next (se obvia la definición)
      .subscribe( (paises) => {
        console.log(paises);



      }, (err) => {
        this.hayError = true;
        console.log('Error');
        console.info(err);
      }

      )
  }


}
