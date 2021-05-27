import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetHomeComponent } from './pet-home/pet-home.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';



@NgModule({
  declarations: [
    PetHomeComponent,
    PetDetailComponent,
    PetEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PetModule { }
