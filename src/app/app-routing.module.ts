import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SafetyComponent } from './safety/safety.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


const routes: Routes = [
  { path: '', redirectTo : "home" , pathMatch : "full"},
  { path: '**', redirectTo : "home" , pathMatch : "full"},
  { path : 'home' , component : HomeComponent },
  { path : 'details' , component : DetailsComponent},
  { path : 'safety' , component : SafetyComponent},
  { path : 'confirmation' , component : ConfirmationComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routes_imports =  [HomeComponent, DetailsComponent, SafetyComponent]
