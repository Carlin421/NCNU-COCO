import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      account: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      password: ['', [Validators.required, Validators.pattern('\\d{8}')]]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Data:', this.formGroup.value);
      // 登入邏輯
    }
  }

  getErrorMessage(field: string): string {
    const control = this.formGroup.get(field);
    if (!control) {
      return ''; // 如果控制項不存在，直接返回空字串
    }
  
    if (control.errors) {
      if (control.hasError('required')) {
        return '此欄位必填';
      } else if (control.hasError('pattern')) {
        return field === 'account' ? '帳號僅能為英文' : '密碼由八個數字組成';
      }
    }
    return '';
  }
}
