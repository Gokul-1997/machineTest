import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,public service:CommonService) { }

  ngOnInit(): void {
  }

  logout():void{
    if(confirm("Are You Sure Logout")){
      localStorage.clear();
      this.router.navigate(['']);
    }
  }

}
