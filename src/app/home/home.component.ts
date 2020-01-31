import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  detailsFormGroup = new FormGroup({
    detailsFirstName: new FormControl('', Validators.required),
    detailsLastName: new FormControl('', Validators.required),
    detailsEmail: new FormControl('', [Validators.required, Validators.email]),
    detailsConfirmation: new FormControl('', [Validators.required]),
  })

  constructor(private _data: DataService , public router : Router, public toast : ToastrService) { }

  detailsForm = { "firstName": "", "lastName": "", "email": "", "confirmation": "" };
  travellers: any = [];
  travellersData : any = [];
  passengersData : any = [];

  // submit form and check if exists
  submit() {
    this.detailsForm.firstName = this.detailsFormGroup.get('detailsFirstName').value;
    this.detailsForm.lastName = this.detailsFormGroup.get('detailsLastName').value;
    this.detailsForm.email = this.detailsFormGroup.get('detailsEmail').value;
    this.detailsForm.confirmation = this.detailsFormGroup.get('detailsConfirmation').value;
    this.checkStatus();
  }

  checkStatus(){
    // get loggedinuser
    var traveller = this.travellers.filter(item => {
      if (item.last_name.toLowerCase() == this.detailsForm.lastName.toLowerCase() && item.confirmation_id == this.detailsForm.confirmation) {
        return item;
      };
    })

    // get his copassengers based on similar confirmation code
    if (traveller && traveller.length > 0) {
      var passengers = this.travellers.filter(item => {
        if (item.confirmation_id == this.detailsForm.confirmation) {
          return item;
        };
      });
      this.travellersData = traveller.map(item => ({...item , isChecked : false}));
      this.passengersData = passengers.filter(item => item.id != traveller[0].id).map(item => ({...item , isChecked : false}));
      localStorage.setItem('travellersData' , JSON.stringify(this.travellersData))
      localStorage.setItem('passengersData' , JSON.stringify(this.passengersData))
      this.router.navigate(['/details']);
    }
    else{
      this.toast.error('Please check the confirmation code and last name entered!!' ,  'Invalid' );
    }
  }

  allTravellers() {
    this._data.getTravellers().subscribe(data => { 
    this.travellers = data;
    localStorage.setItem('allPassengers' , JSON.stringify(this.travellers));  
    });
  }
  
  ngOnInit() {
    this.allTravellers();
  }

}


