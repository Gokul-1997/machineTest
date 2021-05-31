import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyData:any;
  bookingData:any;
  cancelData:any;
  constructor(public service:CommonService,private toastr:ToastrService) {
    this.service.show()
    this.bookingData = JSON.parse(localStorage.getItem("ticketBook") || '{}')
   }

  ngOnInit(): void {
    this.service.historyGet().subscribe(res =>{
      this.historyData = res;
    },error=>{
      console.error(error)
    })
  }
  cancelTicket(val:any){
    let updateSeat ={
      "Classes":val.Classes,
      "TrainStatus":val.TrainStatus,
      "Amount":val.Amount,
      "Status":false
    }
    let canceldata = {
      "Classes":val.Classes,
      "TrainStatus":val.TrainStatus,
      "Amount":val.Amount,
      "date":this.bookingData.date,
      "going_to":this.bookingData.going_to,
      "leaving_form":this.bookingData.leaving_form
    }
    this.service.cancelTicket(canceldata).subscribe(res =>{
      this.toastr.success("successfully cancelled");
    },error =>{
      console.error(error)
    })
    this.service.bookUpdate(val.id,updateSeat).subscribe(res =>{
     this.ngOnInit()
    },error =>{
      console.error(error)
    })

  }
  cancelFun(){
      this.service.cancelGet().subscribe(res =>{
    this.cancelData = res;
  },error =>{
    console.error(error)
  })
  }
}
