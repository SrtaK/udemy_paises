import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { Country } from '../interfaces/pais.interface'

@Injectable({
  //así es visible en toda la aplicación
  providedIn: 'root'
})

//Servicio para gestionar las peticiones a la api
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population' );
  }

  constructor( private http: HttpClient ) { }


  //recibe el termino y devuelve un observable
  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    //este get devuelve un observable
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }


    //recibe el termino y devuelve un observable
  buscarCapital( termino: string ):Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ termino }`;
    //este get devuelve un observable
    return this.http.get<Country[]>( url );

  }

  buscarPaisPorAlpha( id: string ):Observable<Country>{

    const url = `${ this.apiUrl }/alpha/${ id }`;
    //este get devuelve un observable
    return this.http.get<Country>( url );

  }

  buscarPorRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )

  }


}
