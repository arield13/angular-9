import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../ShareEmployee/employee';
import { Status } from '../../classes/status';
import { EmployeeService } from '../ShareEmployee/employee.service';
import { FormsModule }   from '@angular/forms';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

//@nrgx/store - @nrgx/store-devtools - @nrgx/store-effects - @nrgx/router-store 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})

export class EmployeeComponent implements OnInit {

  selectedEmployee:  Employee;
  status: Status;
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();
  message: string = "Hola Mundo!"
  submitted = false;

  constructor(public employeeService: EmployeeService, ) { }

  ngOnInit(): void {
  	this.resetForm();
  	this.employeeService.getData$.subscribe(emplo=> {
  		this.selectedEmployee  = Object.assign(emplo);
  	});

    this.employeeService.GetStatus();
  }

  resetForm(form?: NgForm){
     
     this.messageEvent.emit(this.message)
  	if(form != null){
  		form.resetForm();
  	}
  }

  onSubmit(formu: NgForm){
    if(!formu.valid) return;

  	if(formu.value.EmployeeID == null){
  		this.employeeService.PostEmployee(formu.value).subscribe(data =>{
  			formu.resetForm();
        this.employeeService.refreshEmployee(true);
  		});
  	}else{
      this.employeeService.PutEmployee(formu.value).subscribe(data =>{
        formu.resetForm();
        this.employeeService.refreshEmployee(true);
      });
    }
  }

}
