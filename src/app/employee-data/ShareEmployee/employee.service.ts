import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

import { catchError, map, tap } from 'rxjs/operators'
import { enviroment } from '../../config/enviroment'
import { Employee } from '../ShareEmployee/employee';
import { Status } from '../../classes/status';

const headerOptions = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  SelectedEmployee: Employee;
  StatusList: Status[];
  EmployeeList2: Employee[];
  env = enviroment;

  private employeeData = new BehaviorSubject(Employee);

  getData$ = this.employeeData.asObservable();

  private employeeRefresh = new Subject<boolean>();
  getUpdEmp$ = this.employeeRefresh.asObservable();

  constructor(private http : Http,private httpcl: HttpClient) { }

  setEmployeeData(emplo: any) {
    this.employeeData.next(emplo);
  }

  refreshEmployee(refresh :boolean){
    this.employeeRefresh.next(refresh);
  }

  GetEmployees2(): Observable<Employee[]>{
  		return this.httpcl.get<Employee[]>(this.env.DB_DEV_URI + '/employees').pipe(
        tap(_ => console.log('fetched heroes')),
        //catchError(this.handleError<Employee[]>('getEmployess', []))
       );
  }

  GetEmployees3(){
      return this.http.get(this.env.DB_DEV_URI + '/employees').map((data: Response) =>{
        return data.json() as Employee[];
      }).toPromise().then(x =>{
        this.EmployeeList2 = x['records'];
      });
  }

  GetEmployees(){
      return this.http.get(this.env.DB_DEV_URI + '/employee').map((data: Response) =>{
          return data.json() as Employee[];
        } 
       );
  }

  PostEmployee(emplo: Employee){
  		var body = JSON.stringify(emplo);
  		return this.httpcl.post(this.env.DB_DEV_URI + '/employees', body, { 'headers': headerOptions }).pipe(
        // catchError(this.handleError('updateHero', body))
        tap(_ => console.log('fetched heroes')),
 
       ); 
  }

  PutEmployee(emplo: Employee){
      var body = JSON.stringify(emplo);
      return this.httpcl.put(this.env.DB_DEV_URI + '/employees', body, { 'headers': headerOptions }).pipe(
       // catchError(this.handleError('updateHero', body))
       tap(_ => console.log('fetched heroes')),

      ); 
  }

  DeleteEmployee(id: number){
  		return this.http.delete(this.env.DB_DEV_URI + '/employees/'+id).map(res => res.json());
  }

  GetStatus(){
  		return this.http.get(this.env.DB_DEV_URI + '/status').map((data: Response) =>{
  			return data.json() as Status[];
  		}).toPromise().then(x =>{
  			this.StatusList = x;
  		})
  }

  handleError(error, body) {
    return null
    // do something with the exception
  }

}
