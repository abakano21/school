import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './components/students/student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

import { MyclassesListComponent } from './components/myclasses-list/myclasses-list.component';
import { MyclassDetailsComponent } from './components/myclass-details/myclass-details.component';
import { AddMyclassComponent } from './components/add-myclass/add-myclass.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'students', component: StudentComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'add', component: AddStudentComponent },
  
  { path: 'classes', component: MyclassesListComponent },
  { path: 'classes/:id', component: MyclassDetailsComponent },
  { path: 'classes-add', component: AddMyclassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
