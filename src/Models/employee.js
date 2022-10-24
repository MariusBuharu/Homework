export default class Employee {
    constructor(firstName, lastName, location, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.salary = salary;
    }

    addDetailsToDocument() {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        div.classList.add('person-details', 'mt-3', 'bg-dark', 'text-light', 'p-2');

        const fName = document.createElement('p');
        fName.innerText = `Person first name= ${this.firstName}`;

        const lName = document.createElement('p');
        lName.innerText = `Person last name= ${this.lastName}`;

        const personLocation = document.createElement('p');
        personLocation.innerText = `Person location= ${this.location}`;

        const personSalary = document.createElement('p');
        personSalary.innerText = `Person salary= ${this.salary}`;

        div.append(fName,lName,personLocation,personSalary);
        container.appendChild(div);
    }




}

