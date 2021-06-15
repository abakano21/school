import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  student: Student = {
    first_name: '',
    last_name: '',
    class: '',
    date_of_birth: '',
  };

  submitted = false;

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {}

  saveStudent(): void {
    const data = {
      first_name: this.student.first_name,
      last_name: this.student.last_name,
      class: this.student.class,
      date_of_birth: this.student.date_of_birth,
    };

    this.studentService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newStudent(): void {
    this.submitted = false;
    this.student = {
      first_name: '',
      last_name: '',
      class: '',
      date_of_birth: '',
    };
  }
}
