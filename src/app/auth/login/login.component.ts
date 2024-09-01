import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(
    private fb: FormBuilder,
    private coreSer: CoreService
  ) {
    this.createForm();
  }

  ngOnInit() { }

  getOtp() {
    const qId = this.form.value.qId;
    console.log(qId);
    const data = {
      "qid": "32453400969",
      "name": "sameer",
      "mobileNumber": "50556453",
      "type": "customer"
    }
    this.coreSer.post('generate-otp', { params: data }).subscribe((res) => {
      console.log(res)
    })


  }


  private createForm() {
    this.form = this.fb.group({
      qId: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

}
