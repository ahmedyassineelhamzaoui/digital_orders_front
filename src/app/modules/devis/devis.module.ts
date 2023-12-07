import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisComponent } from './components/devis/devis.component';
import { DevisModalComponent } from './components/devis-modal/devis-modal.component';


@NgModule({
  declarations: [
    DevisComponent,
    DevisModalComponent  
  ],
  imports: [
    CommonModule
  ]
})
export class DevisModule { }
