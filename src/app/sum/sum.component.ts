import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  num1: number = 1;
  num2: number = 2;
  sum: number;

  onSum(){
    this.sum = this.num1 + this.num2;
  }
  constructor() { }

  ngOnInit() {
  }

}
