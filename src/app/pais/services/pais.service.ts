import { HttpClient } from '@angular/common/http';
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

  constructor( private http:HttpClient ) { }

  //recibe el termino y devuelve un observable
  buscarPais(termino:string):Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ termino }`;
    //este get devuelve un observable
    return this.http.get<Country[]>( url );

  }




}
