import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DevisModalComponent } from '../devis-modal/devis-modal.component';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.scss'
})
export class DevisComponent {

  constructor(public dialog:MatDialog) { }

  openModal(){
    this.dialog.open(DevisModalComponent);
  }
}
