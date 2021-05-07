import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//recibe un observable y devuelve un observable
//el tap recibe el observable
import { switchMap,tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  //País puede ser nulo (!)
  pais!:Country;

  //Se ejecuta incluso antes de que se inicialice el componente
  //ActuvatedRoute para suscribirnos a cambios en el url
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService

    ) { }

  //Se ejecuta cuando el componente está inicializado
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.buscarPaisPorAlpha(param.id)),
        tap(console.log)
      )
    //accede a lo que hay en :id, definido en app.routing.module
      .subscribe( pais => this.pais = pais);


  }

}
