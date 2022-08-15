import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  countries: Country[] =[];
  placeholder:string = 'Buscar por capital...';
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }
search(termino: string){ 
  this.hayError=false;
  this.termino = termino;
  this.paisService.searchCapital(this.termino).subscribe(
    (paises)=> { 
      this.countries=paises;
    },(err)=> { 
      this.hayError=true;
      this.countries=[];
    }
  )
}
sugerencias(termino:string){ 
  this.hayError = false;
}
}
