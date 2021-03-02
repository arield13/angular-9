import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeListComponent } from './employee-data/employee-list/employee-list.component';
import { paths } from './services/app-paths';
import { PathResolveService } from './services/path-resolve.service';
import { NotFoundComponent } from './defaultComponent/not-found/not-found.component';


const routes: Routes = [
	{path: paths.home, component: EmployeeDataComponent},
	{path: paths.services, component: EmployeeListComponent},
	{
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
