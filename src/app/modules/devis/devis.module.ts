import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisComponent } from './components/devis/devis.component';
import { DevisModalComponent } from './components/devis-modal/devis-modal.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    DevisComponent,
    DevisModalComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatPaginatorModule
  ],
  exports:[
    DevisComponent,
    DevisModalComponent
  ]
})
export class DevisModule { }
