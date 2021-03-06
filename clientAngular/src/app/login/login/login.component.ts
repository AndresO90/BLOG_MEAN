import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { CommonValidators } from './common.validators';
import { LoginDTO } from './loginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: string;

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required,
      Validators.minLength(4),
      CommonValidators.startWithNumber]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(2)]),
  });
}
    onsave() {

      console.log(this.form.value);
      const userName = this.form.get('userName').value;
      const password = this.form.get('password').value;
      this.service.login(userName, password).subscribe(
        (token: LoginDTO) => {
          console.log('tpken', token);
          if (token.success) {
            this.router.navigateByUrl('/home');
          }
          sessionStorage.setItem('token', token.token);
        },
        res => {
          console.log('RES', res.status);
        }

    );

  }
}

