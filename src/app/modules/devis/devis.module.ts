import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisComponent } from './components/devis/devis.component';
import { DevisModalComponent } from './components/devis-modal/devis-modal.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DevisComponent,
    DevisModalComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    DevisComponent,
    DevisModalComponent
  ]
})
export class DevisModule { }
