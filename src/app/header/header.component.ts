import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router : Router) { }

  // click end button and clear local storage
  home(){
    this._router.navigate(['/home']);
    localStorage.removeItem('allPassengers');
    localStorage.removeItem('checkins');
    localStorage.removeItem('travellersData');
    localStorage.removeItem('passengersData');
  }

  ngOnInit() {
  }

}
