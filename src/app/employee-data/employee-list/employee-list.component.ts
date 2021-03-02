import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { EmployeeService } from '../ShareEmployee/employee.service';
import  { Employee } from '../ShareEmployee/employee';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {

  employee:  Employee;
  EmployeeList: Employee[];
  empName: string;
  searchString: string;
  
 
  constructor(public employeeService: EmployeeService, private modalService: NgbModal, private router: Router) {
   // this.router.navigate(['/services'])
  }

  ngOnInit(): void {
   //this.employeeService.GetEmployees();
   this.employeeService.getUpdEmp$.subscribe(refres=> {
      if(refres) this.getEmployees();
      //this.selectedEmployee  = Object.assign(emplo);
   });
   this.getEmployees();
  }

  getEmployees(){
    //this.employeeService.GetEmployees3();
    this.employeeService.GetEmployees2().subscribe(x=>{
      this.EmployeeList = x;
    });
  }

  editEmployee(emplo: Employee){
  	this.employeeService.setEmployeeData({...emplo});
  }

  onDelete(emplo:Employee, content: any){
    this.empName = emplo.EmployeeName;
    this.employee = emplo;
    this.modalService.open(content, { size: 'sm' });
  }

  deleteEmployee(){

      this.employeeService.DeleteEmployee(this.employee.EmployeeID).subscribe(x=>{
        this.modalService.dismissAll();
        this.getEmployees();
      });
  }

}
