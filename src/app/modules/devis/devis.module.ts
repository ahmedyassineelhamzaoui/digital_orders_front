import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisComponent } from './components/devis/devis.component';
import { DevisModalComponent } from './components/devis-modal/devis-modal.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { UpdateDevisComponent } from './components/update-devis/update-devis.component';

@NgModule({
  declarations: [
    DevisComponent,
    DevisModalComponent,
    AddModalComponent,
    UpdateDevisComponent  
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
