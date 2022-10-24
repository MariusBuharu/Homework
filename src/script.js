"use strict";

import employee from "./Models/employee.js";
import {totalSalaryCalculator} from "./Models/utils.js";

const employee1=new employee('surname1','name1','location1',1000);
const employee2=new employee('surname2','name2','location2',1200);
const employee3=new employee('surname3','name3','location3',1400);
const employee4=new employee('surname4','name4','location4',1100);
const employee5=new employee('surname5','name5','location5',1700);

employee1.addDetailsToDocument();
employee2.addDetailsToDocument();
employee3.addDetailsToDocument();
employee4.addDetailsToDocument();
employee5.addDetailsToDocument();
const employeeArray=[];
employeeArray.push(employee1);
employeeArray.push(employee2);
employeeArray.push(employee3);
employeeArray.push(employee4);
employeeArray.push(employee5);

const show=totalSalaryCalculator(employeeArray);
const container=document.querySelector('.container');
const div=document.createElement('div');
div.classList.add('person-details', 'mt-3', 'bg-dark', 'text-light', 'p-2','mb-4');

const showTotal=document.createElement('p');
showTotal.innerText=` Total amount of salary is ${show}`;
div.appendChild(showTotal);
container.appendChild(div);
