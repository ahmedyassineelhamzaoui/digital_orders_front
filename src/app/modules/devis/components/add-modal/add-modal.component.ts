import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { DevisService } from '../../services/devis.service';
@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.scss'
})
export class AddModalComponent {
  selectedDemandes: any[] = [];
  description: string = '';
  errorMessages: string = '';
  successMessages: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddModalComponent>,
    public devisService: DevisService) {
    this.selectedDemandes = data.items;
  }

  closeModal() {
    this.dialogRef.close();
  }
  saveDevis() {
    const demandes = this.selectedDemandes.map(demande => ({ id: demande.id }));
    console.log(this.description);
    return this.devisService.saveDevis(this.description, demandes, 'PENDING').subscribe((res: any) => {
      this.successMessages =  res.message;
    }, error => {
      this.errorMessages = error.error.message;
    });

  }
}
