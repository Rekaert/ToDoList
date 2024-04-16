import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username ='';
  password ='';
  errorMessage = 'Something went wrong.'
  invalidLogin = false;

constructor(private router: Router, private authenticationService: AuthenticationService) {}

handleLogin() {
  if(this.authenticationService.authenticate(this.username, this.password)) {
    this.router.navigate(['welcome', this.username]);
    this.invalidLogin = false;
  } else {
    this.invalidLogin = false;
  }
}

}
