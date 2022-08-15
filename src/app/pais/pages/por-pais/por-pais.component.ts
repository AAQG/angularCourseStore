import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = 'Hello World'
  hayError: boolean = false;
  countries: Country[] = [];
  placeholder:string = 'Buscar por pais...';
  constructor(private paisService:PaisService) { }
  
  search(termino: string) { 
    this.hayError=false;
    this.termino= termino;
    this.paisService.searchPais(this.termino).
    subscribe((paises) => { 
        console.log(paises);
        this.countries= paises;
      },(err) => { 
        this.hayError=true;
        this.countries=[];
    });
  }
  sugerencias(termino:string){ 
    this.hayError = false;
   //TODO: crear sugerencias
  }
}
