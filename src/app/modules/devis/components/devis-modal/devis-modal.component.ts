import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DevisService } from '../../services/devis.service';

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
  data : any[] = [];
  closeModal(){
    this.dialogRef.close();
  }
  ngOnInit() {
      this.getAllDevis();
  }
  getAllDevis(){
    return this.devisService.getAllDevis().subscribe((res:any)=>{
      this.data = res; 
      console.log(res);
      },
      (err:any)=>console.log(err));
  }
}
