import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {

  students?: Student[];
  currentStudent: Student = {};
  currentIndex = -1;
  first_name = '';

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.retrieveStudents();
  }

  retrieveStudents(): void {
    this.studentService.getAll()
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveStudents();
    this.currentStudent = {};
    this.currentIndex = -1;
  }

  setActiveStudent(student: Student, index: number): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }

  removeAllStudents(): void {
    this.studentService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchFirstName(): void {
    this.currentStudent = {};
    this.currentIndex = -1;

    this.studentService.findByTitle(this.first_name)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}