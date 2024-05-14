import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);

  }
}
