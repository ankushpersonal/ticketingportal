import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }
  confirmedUsers = [];

  // get confirmed and checkedin users
  
  getCheckins(){
    var checkins = JSON.parse(localStorage.getItem('checkins'));
    var allPassengers = JSON.parse(localStorage.getItem('allPassengers'));
    for(var i = 0 ; i < checkins.length; i++){
      this.confirmedUsers.push(allPassengers.find(item => item.id == checkins[i]));
    }
  }

  ngOnInit() {
    this.getCheckins();
  }

}
