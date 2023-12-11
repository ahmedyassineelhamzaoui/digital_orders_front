import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentsComponent } from './modules/equipments/components/equipments/equipments.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { provideHttpClient , withFetch } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ContractsComponent } from './modules/contracts/components/contracts/contracts.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddModalComponent } from './modules/devis/components/add-modal/add-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentsComponent,
    ContractsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    BrowserAnimationsModule
    ],
    
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
