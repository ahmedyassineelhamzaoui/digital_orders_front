import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DemandesService } from '../../services/demandes.service';


@Component({
  selector: 'app-update-demande',
  templateUrl: './update-demande.component.html',
  styleUrl: './update-demande.component.scss'
})
export class UpdateDemandeComponent {

  formInfo:any = {};
  demande:any={};
  demandeId:string |null= "";
  constructor(
    private demandesService: DemandesService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(){
    this.demandeId= this.route.snapshot.paramMap.get('id');
    this.demandesService.getDemandByid(this.demandeId).subscribe(data=>{
      this.demande=data;
      this.demande.startDate = this.formatDate(this.demande.startDate);
      this.demande.endDate = this.formatDate(this.demande.endDate);
      console.log(this.demande.equipment)
    })
  }

  onUpdate(){
    this.demandesService.update(this.demandeId , this.formInfo).subscribe(  
      (response) => {
      console.log('Successfully submitted:', response);
    })
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return `${year}-${month}-${day}`;
  }
}
