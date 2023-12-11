import { Component } from '@angular/core';
import { DemandesService } from '../../services/demandes.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrl: './demandes.component.scss'
})
export class DemandesComponent{
  demandes:any[] = [];
  status:any = {
    demandeStatus:''
  };
  constructor(private demandesService: DemandesService) { }
  ngOnInit() {
     this.getAllDemandes()
  }
  getAllDemandes(){
    this.demandesService.getAllDemands().subscribe(data => {
      this.demandes = data;
        console.log(data);
    });
  }
  accept(demandeId:number){
    this.status.demandeStatus="ACCEPTED";
    console.log(this.status)
      this.demandesService.statusChange(demandeId,this.status).subscribe( 
        (response) => {
          console.log('Successfully submitted:', response);
          // window.location.reload();
          this.getAllDemandes();
        }
      );
  }
}
