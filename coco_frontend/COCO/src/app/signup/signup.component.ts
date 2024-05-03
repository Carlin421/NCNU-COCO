import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      account: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      password: ['', [Validators.required, Validators.pattern('\\d{8}')]],
      email: ['', [Validators.required, Validators.email]],
      identity: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      // 實際的導航邏輯
      if (this.formGroup.value.identity === 'club') {
        this.router.navigateByUrl('/signupclub');
      } else if (this.formGroup.value.identity === 'brand') {
        this.router.navigateByUrl('/signupbrand');
      }
    }
  }

  getErrorMessage(formControlName: string): string {
    const control = this.formGroup.get(formControlName);
    if (control && control.errors) {
      if (control.hasError('required')) {
        return '此欄位必填';
      } else if (control.hasError('pattern')) {
        return '格式有誤，請重新輸入';
      } else if (control.hasError('email')) {
        return '電子郵件格式不正確';
      }
    }
    return '';
  }
}
