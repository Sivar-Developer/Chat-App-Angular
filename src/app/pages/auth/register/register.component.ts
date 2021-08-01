import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/services/database/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  loading: boolean = false
  invalidGrant: String

  constructor(
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
    this.authService.checkAuth
  }

  get f() { return this.registerForm.controls; }

  register() {
    if(this.registerForm.valid) {
      this.loading = true;
      this.authService.register(this.registerForm.value).subscribe(() => this.getUserDetails(),
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
