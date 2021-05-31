import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData:any;
  constructor(public service:CommonService) {
    this.service.show()

   }

  ngOnInit(): void {
    this.profileData = this.service.profileData;
    console.log(this.profileData)
  }

}
