import {Component, OnInit} from '@angular/core';
import {ForgotpasswordControllerService} from "../../services/Role/services/forgotpassword-controller.service";
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formulaire!: FormGroup;

  constructor(private forgotpassword: ForgotpasswordControllerService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      newpassword: ['']
    });
  }

  resetpassword(email: string, newPassword: string) {
    const params = { email: email, newPassword: newPassword };
    this.forgotpassword.setPassword(params).subscribe(
    );
  }

  get email() {
    return this.formulaire.get('email')!.value;
  }

  get newpassword() {
    return this.formulaire.get('newpassword')!.value;
  }
}
