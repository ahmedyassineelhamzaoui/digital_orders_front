import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalerrorComponent } from './components/externalerror/externalerror.component';
import { NotfounderrorComponent } from './components/notfounderror/notfounderror.component';



@NgModule({
  declarations: [
    ExternalerrorComponent,
    NotfounderrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorsModule { }
