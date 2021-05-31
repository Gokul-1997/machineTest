import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingData:any;
  seatAva:any;
  selectedSeat:any;
  selectVal:boolean =false;
  TrainstartTime:any;
  TrainendTime:any;
  constructor(public service:CommonService, public router:Router,private toastr:ToastrService) {
    this.service.show()
   }

  ngOnInit(): void {
    var today = new Date();
    this.TrainstartTime = new Date (today.setHours(today.getHours() + 2))
    this.TrainendTime = new Date (today.setHours(today.getHours() + 4))
   this.service.bookFun().subscribe(res =>{
    this.seatAva = res;
    })
    this.bookingData = JSON.parse(localStorage.getItem("ticketBook") || '{}')

  }
  isAllSelected(item:any) {
    this.selectedSeat = item;
    this.seatAva.forEach((val:any) => {
      if (val.id == item.id){
      val.isSelected = !val.isSelected;
      this.selectVal = val.isSelected
      }
      else {
        val.isSelected = false;
      }
    });
  }
  submitData(){
    let dataval ={
      "Classes":this.selectedSeat.Classes,
      "TrainStatus":this.selectedSeat.TrainStatus,
      "Amount":this.selectedSeat.Amount,
      "Status":true
    }
    this.service.bookUpdate(this.selectedSeat.id,dataval).subscribe(res =>{
      this.toastr.success("Booking Successfully");
      this.router.navigate(['home/history'])
    })
  }
}
