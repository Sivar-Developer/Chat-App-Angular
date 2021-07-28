import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { AuthService } from 'src/app/services/database/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  loading: boolean = false
  invalidGrant: String

  constructor(
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
    this.authService.checkAuth
  }

  get f() { return this.loginForm.controls; }

  login() {
    if(this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe(() => this.getUserDetails(),
        (error) => { this.invalidGrant = error.error.message }
      )
    }
  }

  getUserDetails() {
    this.authService.userdetail().subscribe(() => {
      this.authService.getToken().then(() => {
        this.loading = false
        this.router.navigate(['/'])
      })
    },
    (error) => this.message.create('error', JSON.stringify(error.error))
    )
  }

}
