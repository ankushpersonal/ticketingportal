import { Component, OnInit } from '@angular/core';
import { DataService } from '../home/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _data: DataService, public router : Router , public toast : ToastrService) { }

  traveller = []; // loggedin traveller
  passengers = []; // co pasengers
  checkIns = []; // checked in users


  // get logged in user and co passengers details 

  getAllDetails() {
    this.passengers = JSON.parse(localStorage.getItem('passengersData'));
    this.traveller = JSON.parse(localStorage.getItem('travellersData'));
  }

  checkIn(data) {
    var checkin_user = data.target.id;
    if(data.target.checked == true){
      this.checkIns.push(checkin_user);
    }
    else{
      this.checkIns = this.checkIns.filter(item => item !== checkin_user);
    }
  }

  // check in and proceed 
  
  proceed(){
    if(this.checkIns && this.checkIns.length > 0){
      localStorage.setItem('checkins' , JSON.stringify(this.checkIns));
      this.router.navigate(['/safety']);
    }
    else{
      this.toast.warning('Please check the checkbox to confirm checkin and then proceed.' ,  'Please Check In' );
    }
  }

  ngOnInit() {
    this.getAllDetails();
  }

}
