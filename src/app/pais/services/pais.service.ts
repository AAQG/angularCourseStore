import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
 
private apiUrl : string= 'https://restcountries.com/v2'
constructor(private http: HttpClient) { }
get params() { 
  return new HttpParams ().set(
    'fields','name,capital,alpha2Code,flag,population'
  )
}
searchPais(termino: string): Observable<Country[]>{ 
  const url = `${this.apiUrl}/name/${termino}`
  return this.http.get<Country[]>(url, {params : this.params});
      // .pipe(
      //   catchError(err => of([]))
      //    )
}
searchCapital(termino: string): Observable<Country[]>{ 
const url = `${this.apiUrl}/capital/${termino}`
return this.http.get<Country[]>(url,{params : this.params});
}
getCountryForAlpha(id:string):Observable<Country>{
  const url = `${this.apiUrl}/alpha/${id}`
return this.http.get<Country>(url, );
}

buscarRegion(region: string): Observable<Country[]> { 

const url = `${this.apiUrl}/region/${region}`
return this.http.get<Country[]>(url,{params : this.params})
.pipe(
tap(console.log)
);
}

}
