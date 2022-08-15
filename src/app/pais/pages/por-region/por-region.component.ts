import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  `
   button{ 
      margin-right: 5px
    }
  ` 
  ]
})
export class PorRegionComponent {
  regiones: string [] =[
    'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
  ] 
  regionActiva:string ='';
  paises: Country[] = [];

   
  constructor(private paisesService: PaisService) { }
  getClaseCSS(region:string){ 
    return (region===this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary'
  }
  activarRegion(region : string){ 
    this.regionActiva = region;
// todo: hacer el llamado al servicio
this.paisesService.buscarRegion(region).subscribe(
  (paisRegion: Country[])=>{ 
    this.paises = paisRegion;
  }
)

  }
  


}
