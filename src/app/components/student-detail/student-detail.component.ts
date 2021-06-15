import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnInit {
  currentStudent: Student = {
    first_name: '',
    last_name: '',
    class: '',
    date_of_birth: '',
  };
  message = '';

  constructor(
    private studentService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getStudent(this.route.snapshot.params.id);
  }

  getStudent(id: string): void {
    this.studentService.get(id).subscribe(
      (data) => {
        this.currentStudent = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateStudent(): void {
    this.message = '';

    this.studentService
      .update(this.currentStudent.id, this.currentStudent)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = response.message
            ? response.message
            : 'This student info was updated successfully!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteStudent(): void {
    this.studentService.delete(this.currentStudent.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/students']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
