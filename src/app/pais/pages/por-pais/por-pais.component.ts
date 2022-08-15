import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li { 
      cursor: pointer
    }
    `
  ]
})
export class PorPaisComponent {
  termino: string = ''
  hayError: boolean = false;
  countries: Country[] = [];
  countriesSug: Country[]=[];
  mostrarSugerencias: boolean = false;
  placeholder:string = 'Buscar por pais...';
  constructor(private paisService:PaisService) { }
  
  search(termino: string) { 
    this.mostrarSugerencias = false;
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
   this.termino = termino;
   this.mostrarSugerencias = true;
    this.paisService.searchPais(termino)
    .subscribe(paises => this.countriesSug = paises.splice(0,5))
    , (err:any) => this.countriesSug = []
  }

  buscarSugerido(termino:string) { 
    this.search(termino);
  }
}
