import { Injectable } from '@angular/core';
import {InMemoryDbService,} from 'angular-in-memory-web-api';
import { CARS } from './car/mock-car-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const cars =CARS;
    return {cars}
    
  }
}
