import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngSwitch';

  people: any[] = [
    {
      "sno" : 1,
      "name": "Charlie",
      "course": "Bsc(Hons)",
      "Grade": 'A'
    },
    {
      "sno" : 2,
      "name": "Leslie",
      "course": "BA",
      "Grade": 'B'
    },
    {
      "sno" : 3,
      "name": "John",
      "course": "BCom",
      "Grade": 'A'
    },
    {
      "sno" : 4,
      "name": "Jack",
      "course": "Bsc(Hons)",
      "Grade": 'C'
    },
    {
      "sno" : 5,
      "name": "Shawn",
      "course": "MBA",
      "Grade": 'B'
    },
    {
      "sno" : 6,
      "name": "Shilling",
      "course": "MSc",
      "Grade": 'B'
    },
    {
      "sno" : 7,
      "name": "Tensing",
      "course": "MBA",
      "Grade": 'A'
    },
    {
      "sno" : 8,
      "name": "Bob",
      "course": "MSc",
      "Grade": 'C'
    },
    {
      "sno" : 9,
      "name": "George",
      "course": "MA",
      "Grade": 'D'
    },
    {
      "sno" : 10,
      "name": "Weasley",
      "course": "B.Tech",
      "Grade": 'A'
    }
  ];
}
