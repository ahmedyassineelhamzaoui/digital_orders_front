import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { DemandesModule } from './modules/demandes/demandes.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    DemandesModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
