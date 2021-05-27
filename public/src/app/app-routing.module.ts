import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';
import { PetEditComponent } from './pet/pet-edit/pet-edit.component';
import { PetHomeComponent } from './pet/pet-home/pet-home.component';

const routes: Routes = [
  { path: 'pets/:id/edit', component: PetEditComponent},
  { path: 'pets/new', component: PetEditComponent},
  { path: 'pets/:id', component: PetDetailComponent},
  { path: 'pets', component: PetHomeComponent},
  { path: '', component: PetHomeComponent,  pathMatch: 'full'},
  { path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
