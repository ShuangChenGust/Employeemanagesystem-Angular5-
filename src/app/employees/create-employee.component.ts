import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Department } from '../models/department.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  previewPhoto = false;
  dateOfBirth:Date = new Date(2020, 1, 1);
  datepickerConfig: Partial<BsDatepickerConfig>;
  
  employee:Employee = {
    id:null,
    name:null,
    gender:null,
    contactPreference:null,
    phoneNumber:null,
    email:null,
    dateOfBirth:null,
    department:null,
    isActive:null,
    photoPath:null,
  };

  constructor() {
    this.datepickerConfig = Object.assign({}, {containerClass:'theme-dark-blue',
    showWeekNumbers:false,
    minDate : new Date(1900, 0 , 1),
    maxDate : new Date(2020, 12, 31),
    dateInputFormat : "DD/MM/YYYY",
  })
  }

  departments:Department[] = [
    {id:1, name:"Help Desk"},
    {id:2, name:"HR"},
    {id:3, name:"IT"},
    {id:4, name:"Accountant"},
    {id:5, name:"Marketing"},
  ]

  gender = "male";
  department = 3;
  

  ngOnInit() {
  }

  saveEmployee(newEmployee:Employee):void{
    console.log(newEmployee);
  }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
}
