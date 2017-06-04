import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  num1: number;
  num2: number;
  sum: number;

  onSum(){
    this.num1 = +this.num1;
    this.num2 = +this.num2;
    this.sum = this.num1 + this.num2;
  }
  constructor() { }

  ngOnInit() {
  }

}
