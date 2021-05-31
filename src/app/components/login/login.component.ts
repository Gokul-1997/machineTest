import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private router:Router, public service:CommonService) {
    this.service.hide()

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    if(this.form.value.username == 'gokul' && this.form.value.password == "gokul"){
      this.router.navigate(['home'])
    }

  }
}
