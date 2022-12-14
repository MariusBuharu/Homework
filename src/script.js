"use strict";

import Employee from "./Models/employee.js";
import {totalSalaryCalculator} from "./Models/utils.js";

const employee1=new Employee('surname1','name1','location1',1000);
const employee2=new Employee('surname2','name2','location2',1200);
const employee3=new Employee('surname3','name3','location3',1400);
const employee4=new Employee('surname4','name4','location4',1100);
const employee5=new Employee('surname5','name5','location5',1700);

employee1.addDetailsToDocument();
employee2.addDetailsToDocument();
employee3.addDetailsToDocument();
employee4.addDetailsToDocument();
employee5.addDetailsToDocument();
const employeeArray=[];

employeeArray.push(employee1,employee2,employee3,employee4,employee5);


const show=totalSalaryCalculator(employeeArray);
const container=document.querySelector('.container');
const div=document.createElement('div');
div.classList.add('person-details', 'mt-3', 'bg-dark', 'text-light', 'p-2','mb-4');

const showTotal=document.createElement('p');
showTotal.innerText=` Total amount of salary is ${show}`;
div.appendChild(showTotal);
container.appendChild(div);
