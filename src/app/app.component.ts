import { AuthenticationService } from './service/authentication.service';
import { Component } from '@angular/core';
import { Router, UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Automated-Talent-Management-App';

  constructor(public router:Router) {}
  slides = [{'image': 'assets/images/car1.png'}, {'image': 'assets/images/car2.jpg'},{'image': 'assets/images/car3.png'}, {'image': 'assets/images/car4.jpg'}, {'image': 'assets/images/car5.jpg'}];
}
