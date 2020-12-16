import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFor';
  phoneCompany: any[] = [
    {
      "name": "Iphone"
    },
    {
      "name": "Galaxy 9.0"
    },
    {
      "name": "Blackberry 10z"
    }
  ];
}
