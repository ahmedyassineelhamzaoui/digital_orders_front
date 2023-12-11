import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentsComponent } from './modules/equipments/components/equipments/equipments.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CreatDemandeComponent } from './modules/creat-demande/creat-demande.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddModalComponent } from './modules/devis/components/add-modal/add-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentsComponent,
    CreatDemandeComponent,  
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    MatPaginatorModule,
    AppRoutingModule,
    BrowserModule,
    MatDialogModule
    ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
