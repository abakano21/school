import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './components/students/student.component';
import { AppRoutingModule } from './app-routing.module';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { FormsModule } from '@angular/forms';
import { AddMyclassComponent } from './components/add-myclass/add-myclass.component';
import { MyclassDetailsComponent } from './components/myclass-details/myclass-details.component';
import { MyclassesListComponent } from './components/myclasses-list/myclasses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddStudentComponent,
    StudentDetailComponent,
    AddMyclassComponent,
    MyclassDetailsComponent,
    MyclassesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
