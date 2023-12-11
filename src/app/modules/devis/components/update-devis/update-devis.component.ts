import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DevisService } from '../../services/devis.service';
import { DevisComponent } from '../devis/devis.component';

@Component({
  selector: 'app-update-devis',
  templateUrl: './update-devis.component.html',
  styleUrl: './update-devis.component.scss'
})
export class UpdateDevisComponent {
  selectedStatus: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  constructor(
    public dialogRef: MatDialogRef<UpdateDevisComponent>,
    public devisService: DevisService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
  ) { 

  }

  hideEditModal() {
    this.dialogRef.close();
  }
  updateDevisStatus() {
   this.data.id;
    if (!this.selectedStatus) {
      alert('Please select a status');
      return;
    }
  
    this.devisService.updateDevisStatus(this.data.id, this.selectedStatus).subscribe((res : any) => {
      this.successMessage = res.message;
    }, error => {
      this.errorMessage = error.message;
    });
  }
}
