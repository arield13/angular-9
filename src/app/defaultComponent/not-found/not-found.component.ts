import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  path: string;
  counter_click:number = 0;
  toggle_btn:boolean = true;

  formContact:any = {firstName:"Coder",lastName:"Byte",phoneNumber:""}
  contact_list:any = []
  random_int:number = 0;
  username:string = "";

 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.pipe(take(1))
      .subscribe((data: { path: string }) => {
        this.path = data.path;
      });
  }

  addContactList(){
    this.contact_list.push({firstName:this.formContact.firstName,
    lastName:this.formContact.lastName,phoneNumber:this.formContact.phoneNumber
    })
 }

 generateRandom(){
   this.random_int = Math.floor(Math.random() * 9) + 1;
   this.username = this.formContact.firstName.toLowerCase() +"_"+this.formContact.lastName.toLowerCase()+"_"+this.random_int;
 }

}
