import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandesComponent } from './components/demandes/demandes.component';
import { UpdateDemandeComponent } from './components/update-demande/update-demande.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DemandesComponent,
    UpdateDemandeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class DemandesModule { }
