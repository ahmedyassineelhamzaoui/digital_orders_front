import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DevisService } from '../../services/devis.service';
import { DevisModule } from '../../devis.module';
@Component({
  selector: 'app-devis-modal',
  templateUrl: './devis-modal.component.html',
  styleUrl: './devis-modal.component.scss'
})
export class DevisModalComponent {

  constructor(
    public dialogRef:MatDialogRef<DevisModalComponent>,
    public devisService:DevisService
    ) { }
    demandes : any[] = [];
    isLoading : boolean = false;
  closeModal(){
    this.dialogRef.close();
  }
  ngOnInit() {
      this.getAllDevis();
  }
  getAllDevis(){
    this.isLoading = true;
    return this.devisService.getAllDevis().subscribe((res:any)=>{
      this.demandes = res; 
      this.isLoading = false;
      },
      (err:any)=>{
        console.log(err)
        this.isLoading = false;
      });
  }
}
