import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cars = [];
  constructor() {
    this.cars = JSON.parse(localStorage.getItem("cars")) || [];
    console.log('this.cars:' + this.cars);
  }

  ngOnInit(): void {
    setTimeout(() => {
    this.cars = [{"name": "subaru"}];
    localStorage.setItem("cars", JSON.stringify(this.cars));
    }, 3000)

  }
}
