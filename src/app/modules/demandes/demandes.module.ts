import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandesComponent } from './components/demandes/demandes.component';
import { UpdateDemandeComponent } from './components/update-demande/update-demande.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DemandesComponent,
    UpdateDemandeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DemandesModule { }
