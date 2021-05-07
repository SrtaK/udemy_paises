import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})

export class PaisInputComponent implements OnInit{

  //estos son los eventos que disparo dentro del html de este componente
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //se emite cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();


  //Recibo el valor del placeholder del html
  @Input() placeholder: string= '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';


  //Se dispara una unica vez cuando el copmonente es creado y ya está inicializado
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    })

  }

  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }


}
