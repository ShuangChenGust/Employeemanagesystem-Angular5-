import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  //selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[]= [
    {
      id:1,
      name:'Mark',
      gender:'male',
      contactPreference:'email',
      email:'guschenwpi@gmail.com',
      phoneNumber:5086153213,
      dateOfBirth : new Date('10/25/1988'),
      department : 'IT',
      isActive : true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id:2,
      name:'mary',
      gender:'female',
      contactPreference:'email',
      email:'Mary123@gmail.com',
      phoneNumber:3385109231,
      dateOfBirth : new Date('10/25/1958'),
      department : 'IT',
      isActive : true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id:3,
      name:'john',
      gender:'male',
      contactPreference:'email',
      email:'schen8@wpi.edu',
      phoneNumber:5086153172,
      dateOfBirth : new Date('10/25/1998'),
      department : 'HR',
      isActive : true,
      photoPath: 'assets/images/john.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
