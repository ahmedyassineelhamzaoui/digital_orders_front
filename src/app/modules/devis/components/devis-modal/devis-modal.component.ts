import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DevisService } from '../../services/devis.service';
import { DevisModule } from '../../devis.module';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { error } from 'console';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-devis-modal',
  templateUrl: './devis-modal.component.html',
  styleUrl: './devis-modal.component.scss'
})
export class DevisModalComponent {

  demandes: any[] = [];
  isLoading: boolean = false;
  selectAll: boolean = false;
  pageSize: number = 5;
  currentPageIndex: number = 0;
  selectedDemandes: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<DevisModalComponent>,
    public addModal: MatDialog,
    public devisService: DevisService
  ) { }

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
  }
  closeModal() {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.getAllDevis();
  }
  getAllDevis() {
    this.isLoading = true;
    return this.devisService.getAllDevis().subscribe((res: any) => {
      this.demandes = res.map((item: any) => ({ ...item, isSelected: false }));;
      this.isLoading = false;
    },
      (err: any) => {
        console.log(err)
        this.isLoading = false;
      });
  }
  toggleSelectAll() {
    this.demandes.forEach((demande: any) => {
      demande.isSelected = this.selectAll;
    });
  }
  checkBoxChanged() {
    if (this.isAllcheckBoxesSelected()) {
      this.selectAll = true;
    } else {
      this.selectAll = false;
    }
  }
  isAllcheckBoxesSelected() {
    return this.demandes.every(demande => demande.isSelected);
  }
 
  addDevis() {
    this.selectedDemandes = this.demandes.filter(demande => demande.isSelected);
    if (this.selectedDemandes.length === 0) {
      alert('Please check a demande before adding a devis');
      return;
    }
    this.closeModal();
    this.addModal.open(AddModalComponent, {
      data: { description: '', items: this.selectedDemandes }
    });
  }
 
}
