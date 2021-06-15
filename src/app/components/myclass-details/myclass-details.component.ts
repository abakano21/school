import { Component, OnInit } from '@angular/core';
import { MyclassService } from 'src/app/services/myclass.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Myclass } from 'src/app/models/myclass.model';

@Component({
  selector: 'app-myclass-details',
  templateUrl: './myclass-details.component.html',
  styleUrls: ['./myclass-details.component.css']
})

export class MyclassDetailsComponent implements OnInit {
  currentMyClass: Myclass = {
    name: '',
    code: '',
    maximum_students: '',
    status: '',
    description: '',
    students: [],
  };

  message = '';

  constructor(
    private myclassService: MyclassService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getClass(this.route.snapshot.params.id);
  }

  getClass(id: string): void {
    this.myclassService.get(id).subscribe(
      (data) => {
        this.currentMyClass = data;
        console.log(this.currentMyClass)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateMyClass(): void {
    this.message = '';

    this.myclassService
      .update(this.currentMyClass.id, this.currentMyClass)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = response.message
            ? response.message
            : 'This class info was updated successfully!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteMyClass(): void {
    this.myclassService.delete(this.currentMyClass.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/classes']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
