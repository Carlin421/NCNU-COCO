import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface SignupFormData {
  username: string;
  account: string;
  password: string;
  identity: 'club' | 'brand';
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData: SignupFormData = {username: '', account: '', password: '', identity: 'brand'};  // 初始化 formData

  constructor(private router: Router) {}

  onSubmit(formData: SignupFormData) {
    if (formData.identity === 'club') {
      this.router.navigateByUrl('/signupclub');
    } else if (formData.identity === 'brand') {
      this.router.navigateByUrl('/signupbrand');
    }
  }
}
