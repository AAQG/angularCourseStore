import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
  private activatedRoute: ActivatedRoute,
  private paisService: PaisService)
  { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id})=> 
      this.paisService.getCountryForAlpha(id)),
      tap(console.log)
    ).subscribe(
      pais => this.pais = pais
    )
    // this.activatedRoute.params.subscribe(
    //   ({id}) => {
    //     console.log(id);
    //     this.paisService.getCountryForAlpha(id).subscribe(
    //       pais=>{ 
    //         console.log(pais);
    //       })
    //   }
    // )

}

}
