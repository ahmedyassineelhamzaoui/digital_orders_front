import { Component } from '@angular/core';
import { DemandesService } from '../../services/demandes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrl: './demandes.component.scss'
})
export class DemandesComponent{
  // isLoading: boolean=false;
  demandes:any[] = [];
  status:any = {
    demandeStatus:''
  };
  constructor(
    private demandesService: DemandesService,
    private router: Router
    ) { }
  ngOnInit() {
    // this.isLoading = true;
     this.getAllDemandes()
  }
  updateDemande(demandeId:number){
    console.log(demandeId)
    this.router.navigate(['/updateDemande/'+ demandeId]);
  }
  getAllDemandes(){
    this.demandesService.getAllDemands().subscribe(data => {
      this.demandes = data;
        console.log(data);
        // this.isLoading = false;
    });
  }
  updateStatus(demande:any , demandeStatus:string){
    this.status.demandeStatus=demandeStatus;
    console.log(this.status)
      this.demandesService.statusChange(demande.id,this.status).subscribe( 
        (response) => {
          console.log('Successfully submitted:', response);
          this.getAllDemandes();
        }
      );
  }
  deleteDemand(demandeId:number){
    this.demandesService.delete(demandeId).subscribe( 
      (response) => {
        console.log('Successfully submitted:', response);
        // window.location.reload();
        this.getAllDemandes();
      }
    );
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }
}
