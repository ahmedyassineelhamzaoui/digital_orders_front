import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentsComponent } from './modules/equipments/components/equipments/equipments.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CreatDemandeComponent } from './modules/creat-demande/creat-demande.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentsComponent,
    CreatDemandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
