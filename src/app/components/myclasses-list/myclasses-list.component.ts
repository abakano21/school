import { Component, OnInit } from '@angular/core';
import { Myclass } from 'src/app/models/myclass.model';
import { MyclassService } from 'src/app/services/myclass.service';

@Component({
  selector: 'app-myclasses-list',
  templateUrl: './myclasses-list.component.html',
  styleUrls: ['./myclasses-list.component.css']
})
export class MyclassesListComponent implements OnInit {

  myclasses?: Myclass[];
  currentMyClass: Myclass = {};
  currentIndex = -1;
  name = '';

  constructor(private myClassService: MyclassService) { }

  ngOnInit(): void {
    this.retrieveMyClasses();
  }

  retrieveMyClasses(): void {
    this.myClassService.getAll()
      .subscribe(
        data => {
          this.myclasses = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveMyClasses();
    this.currentMyClass = {};
    this.currentIndex = -1;
  }

  setActiveMyClass(student: Myclass, index: number): void {
    this.currentMyClass = student;
    this.currentIndex = index;
  }

  removeAllMyClasses(): void {
    this.myClassService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

}