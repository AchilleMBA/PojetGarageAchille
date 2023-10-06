import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Welcome to {{carList[0]}}!</h1>`
})
export class AppComponent implements OnInit {
  carList = ['ford', 'kia', 'mercedes'];

  ngOnInit(){
    console.table(this.carList)
    this.selectCar('ford');
  }
  selectCar(carName: string){
    console.log(`Vous avez cliqué sur la voiture ${carName}`);
}

}
