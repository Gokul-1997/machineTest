import { Component, OnInit,Output,EventEmitter,ViewChild } from '@angular/core';
import { CommonService } from '../../service/common.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stations:any;
  minDate = new Date();
  place:Place[]=[];
  constructor(private router:Router, public service:CommonService) {
    this.service.show()
    this.place[0]=new Place()

   }

  ngOnInit(): void {

  }
  leave(e:any){
    let leavingfrom=e.value;
    console.log(leavingfrom)
    if(leavingfrom=='dhaka'){
      this.place= [
        {key:'1109001', value:'Comilla'} ,
        {key:'1109002', value:'Chittagong'} ,
        {key:'1109004', value:'KuaKata'} ,
        {key:'1109005', value:'Coxs Bazar'},
        {key:'1109006', value:'Rajshahi'}
      ]
  }
  else if(leavingfrom=='comilla'){
    this.place= [
      {key:'2209002', value:'Chittagong'} ,
      {key:'2209001', value:'Dhaka'} ,
      {key:'2209003', value:'Rajshahi'} ,

    ]
  }
  else if(leavingfrom=='chittagong'){
    this.place= [
      {key:'3309003', value:'Mymensingh'} ,
      {key:'3309001', value:'Dhaka'} ,
      {key:'3309002', value:'Sylet'} ,

    ]
  }
}
SearchBus(form: NgForm) {
  if(form.form.status == "INVALID"){
    return
  }
  let leaving_form = form.value.leaving_form;
  let destination;

  this.place.filter(iteam=>{
    if(iteam.key==form.value.going_to){
      destination=iteam.value
    }
  })
  let date = form.value.depart_date;
  // let className = form.value.classes;

  let route:Journey_Route = {
    leaving_form: leaving_form,
    going_to: destination,
    date:date,
    // classes:className
  }
  localStorage.setItem("ticketBook", JSON.stringify(route))
  this.router.navigate(['home/book'])
}
}
export class Place {
  key!:string;
  value!:string;
}

export class Journey_Route {
  leaving_form!:string;
  going_to!:any;
  date!:string;
}
