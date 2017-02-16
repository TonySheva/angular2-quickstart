import { Component } from '@angular/core';

export class Person {
  name: string;
  constructor(
    public id: Number,
    public age: Number
  ) {
    this.name = 'Tony';
  }
}

@Component({
  selector: 'my-app',
  template: `<ul>
                  <li *ngFor="let person of persons">
                    {{ person.name }} {{ person.age }} {{person.id}}
                    <input [(ngModel)]="person.name">
                  </li>
                </ul>
             `,
})
export class AppComponent {
  persons = [
    new Person(2, 22),
    new Person(3, 23),
    new Person(3, 2322)
  ];
}
