import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-devis-modal',
  templateUrl: './devis-modal.component.html',
  styleUrl: './devis-modal.component.scss'
})
export class DevisModalComponent {

  constructor(public dialogRef:MatDialogRef<DevisModalComponent>) { }

  closeModal(){
    this.dialogRef.close();
  }
}
