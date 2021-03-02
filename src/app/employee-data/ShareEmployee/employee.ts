export class Employee {
   EmployeeID: number;
   EmployeeName: string;
   EmployeeCode: string;
   EmployeeEmail: string;
   EmployeeBirth: string;
   StatusID: number; 

   constructor(EmployeeID: number,
			   EmployeeName: string,
			   EmployeeCode: string,
			   EmployeeEmail: string,
			   EmployeeBirth: string,
			   StatusID: number ){
   	this.EmployeeID = EmployeeID;
   	this.EmployeeName = EmployeeName;
   	this.EmployeeCode = EmployeeCode;
   	this.EmployeeEmail = EmployeeEmail;
   	this.EmployeeBirth = EmployeeBirth;
   	this.StatusID = StatusID;
   }
}