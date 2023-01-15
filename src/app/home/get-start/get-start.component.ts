import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-start',
  templateUrl: './get-start.component.html',
  styleUrls: ['./get-start.component.css'],
})
export class GetStartComponent {

  constructor(public router: Router) {

  }

  onNext() {
    this.router.navigate(['/registerNext']);
  }

  showPassword = false;
  showPasswordTwo = false;

  passwordChange() {
    this.showPassword = !this.showPassword;
  }

  passwordTwoChange() {
    this.showPasswordTwo = !this.showPasswordTwo;
  }
}
