import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  num1: any;
  num2: any;
  sum: number;

  onSum(){
    // this.num1 = +this.num1;//converts number to int to prevent concatenation
    // this.num2 = +this.num2;
    this.sum = parseInt(this.num1) + parseInt(this.num2);
  }
  constructor() { }

  ngOnInit() {
  }

}
