import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { car } from './car';


@Injectable()
export class CarService {

  constructor (private http: HttpClient){}

  getCarList(): Observable<car[]> {
    return this.http.get<car[]>('api/cars').pipe(
      tap(carList => console.table(carList)), // Remove extra parentheses
      catchError(error => {
        console.error(error); // Use console.error for errors
        return of([]); // Return an empty array with the correct type
    })
  )
}

getCarById(carId: number): Observable<car|undefined> {
  return this.http.get<car>(`api/cars/${carId}`).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handlError(error,undefined)) 
    );

}

SearchCarList (term: string): Observable<car[]>{
  return this.http.get<car[]>(`api/cars/?name=${term}`).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handlError(error,undefined)) 

  )
}

updateCar(car: car): Observable<null> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.put('api/cars', car, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handlError(error,null)) 
  );
}

addCar(car: car): Observable<car>{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post<car>('api/cars', car, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handlError(error,null)) 
  );
}

deleteCarById(carId: number): Observable<null>{
  return this.http.delete(`api/cars/${carId}`).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handlError(error,null))
  );
}

private log(response: any){
  console.table(response);
}

private handlError(error: Error, errorValue: any){
  console.error(error);
  return of(errorValue);
}

getCarCategoryList (): string []{

  return ['collection', 'cinema', 'occasion'];
}
}
