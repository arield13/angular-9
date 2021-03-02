import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.less']
})
export class EmployeeDataComponent implements OnInit {
  parentMessage: string = "Holapa";
  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(msg){
  	// console.log(89,msg);
  }

}