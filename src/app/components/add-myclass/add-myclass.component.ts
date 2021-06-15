import { Component, OnInit } from '@angular/core';
import { Myclass } from 'src/app/models/myclass.model';
import { MyclassService } from 'src/app/services/myclass.service';

@Component({
  selector: 'app-add-myclass',
  templateUrl: './add-myclass.component.html',
  styleUrls: ['./add-myclass.component.css'],
})
export class AddMyclassComponent implements OnInit {
  myclass: Myclass = {
    name: '',
    code: '',
    maximum_students: '',
    status: '',
    description: '',
  };

  submitted = false;

  constructor(private myClassService: MyclassService) {}

  ngOnInit(): void {}

  saveMyClass(): void {
    const data = {
      name: this.myclass.name,
      code: this.myclass.code,
      maximum_students: this.myclass.maximum_students,
      status: this.myclass.status,
      description: this.myclass.description,
    };

    this.myClassService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newMyClass(): void {
    this.submitted = false;
    this.myclass = {
      name: '',
      code: '',
      maximum_students: '',
      status: '',
      description: '',
    };
  }
}
