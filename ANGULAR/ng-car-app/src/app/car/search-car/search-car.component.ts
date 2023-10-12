import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { car } from '../car';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  
})
export class SearchCarComponent implements OnInit {

  searchTerms = new Subject<string>();
  cars$: Observable<car[]>;

    constructor (private router: Router){ }

    ngOnInit(): void {
    }
      search (term: String) {
        this.searchTerms.next('term');

      }

      goToDetail(car: car) {
        const link = ['/car', car.id];
        this.router.navigate(link);
      }
    }


