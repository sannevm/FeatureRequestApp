import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-request-account-page',
  templateUrl: './request-account-page.component.html',
  styleUrls: ['./request-account-page.component.css']
})
export class RequestAccountPageComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private alertService: AlertService,
  ) { 
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) { 
      //     this.router.navigate(['/']);
      // }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          email: ['', [Validators.required, Validators.email]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      console.log("OnSubmit is aangeroepen");

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      console.log("The form is valid");

      this.loading = true;
      this.userService.register(this.registerForm.value)
          // .pipe(first())
          .subscribe(
              data => {
                  // this.alertService.success('Registration successful', true);
                  console.log("Hij is bij de redirect aangekomen.");
                  this.router.navigate(['/home']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
      