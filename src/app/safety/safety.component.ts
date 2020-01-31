import { Component, OnInit } from '@angular/core';
import { DataService } from '../home/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {

  constructor(private _data : DataService , public router : Router) { }

  instructions:any = [];

  getSafetyInstructions(){
    this._data.instructions().subscribe(result => this.instructions = result)
  }

  proceed(){
    console.log('dddd')
    this.router.navigate(['/confirmation'])
  }

  ngOnInit() {
    this.getSafetyInstructions();
  }

}
