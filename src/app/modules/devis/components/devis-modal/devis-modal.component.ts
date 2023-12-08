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
  demandes : any[] = [];
  isLoading : boolean = false;
  selectAll: boolean = false;
  constructor(
    public dialogRef:MatDialogRef<DevisModalComponent>,
    public devisService:DevisService
    ) { }
    
  closeModal(){
    this.dialogRef.close();
  }
  ngOnInit() {
      this.getAllDevis();
  }
  getAllDevis(){
    this.isLoading = true;
    return this.devisService.getAllDevis().subscribe((res:any)=>{
      this.demandes = res.map((item: any) => ({ ...item, isSelected: false }));;
      this.isLoading = false;
      },
      (err:any)=>{
        console.log(err)
        this.isLoading = false;
      });
  }
  toggleSelectAll(){
      this.demandes.forEach((demande:any)=>{
        demande.isSelected = this.selectAll;
      });
  }
  checkBoxChanged(){
       if(this.isAllcheckBoxesSelected()){
        this.selectAll = true;
       }else{
        this.selectAll = false;
       }
  }
  isAllcheckBoxesSelected(){
    return this.demandes.every(demande => demande.isSelected);
  }
}
