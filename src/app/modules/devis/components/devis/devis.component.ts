import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DevisModalComponent } from '../devis-modal/devis-modal.component';
import { DevisService } from '../../services/devis.service';
import { PageEvent } from '@angular/material/paginator';
import { UpdateDevisComponent } from '../update-devis/update-devis.component';
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.scss'
})
export class DevisComponent {

  isLoading: boolean=false;
  errorMessage: string = '';
  devis : any[] = [];
  pageSize: number = 5;
  currentPageIndex: number = 0;
  selectedDemandes: any[] = [];
  constructor(public dialog:MatDialog,
    public devisService: DevisService) { }

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
  }
  openModal(){
    this.dialog.open(DevisModalComponent);
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.getAllDevis();
  }
  getAllDevis(){
    this.devisService.getAllDevis().subscribe((res:any)=>{
      this.devis = res;
      this.isLoading = false;
    }, error=>{
      this.errorMessage = error.error.timestamp +" status: "+ error.error.status +" error: "+ error.error.error +" path: "+ error.error.path;
      this.isLoading = false;
    });
  }
  openEditModal(id: string) {
    const dialogRef = this.dialog.open(UpdateDevisComponent, {
      data: { id: id }
    });
  
    dialogRef.afterClosed().subscribe(() => {
        this.getAllDevis();
    });
  }
}
