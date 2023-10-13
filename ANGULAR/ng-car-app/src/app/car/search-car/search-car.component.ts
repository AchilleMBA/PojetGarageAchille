import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  
})
export class SearchCarComponent implements OnInit {

  searchTerms = new Subject<string>();
  cars$: Observable<car[]>;

    constructor (
      private router: Router,
      private carService: CarService
      ){ }

    ngOnInit(): void {

      this.cars$ = this.searchTerms.pipe(
        // {... "a"."ab"...."abz"."ab"..."abc"....}
        debounceTime(300),
        //{....."ab"...."ab"..."abc"....}
        distinctUntilChanged(),
        // {...."ab"......."abc"......}
        switchMap((term) => this.carService.SearchCarList(term))
        //{....carList(ab)......carList(abc)....}

      );
    }
      search(term: string) {
        this.searchTerms.next(term);

      }

      goToDetail(car: car) {
        const link = ['/car', car.id];
        this.router.navigate(link);
      }
    }


