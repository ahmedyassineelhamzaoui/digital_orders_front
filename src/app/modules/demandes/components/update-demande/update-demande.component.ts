import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DemandesService } from '../../services/demandes.service';
import { EquipmentsService } from '../../../equipments/services/equipments.service';


@Component({
  selector: 'app-update-demande',
  templateUrl: './update-demande.component.html',
  styleUrl: './update-demande.component.scss'
})
export class UpdateDemandeComponent {

  formInfo:any = {};
  demande:any={};
  demandeId:string |null= "";
  equipments:any[] = [];
  errorMessages: string = '';
  constructor(
    private demandesService: DemandesService,
    private route: ActivatedRoute,
    private router: Router,
    private equipmentService: EquipmentsService) { }
  ngOnInit(){
    this.demandeId= this.route.snapshot.paramMap.get('id');
    this.getDemandeById();
    this.getAllEquipment();
  }
  getAllEquipment(){
    this.equipmentService.getAllEquipments().subscribe((data:any) => {
      this.equipments = data.equipments;
    } );
  }
  getDemandeById(){
    this.demandesService.getDemandByid(this.demandeId).subscribe(data=>{
      this.demande=data;
      this.demande.startDate = this.formatDate(this.demande.startDate);
      this.demande.endDate = this.formatDate(this.demande.endDate);
      console.log(this.demande.equipment)
    })
  }
  onUpdate(){
    this.demandesService.update(this.demandeId , this.demande).subscribe(  
      (response) => {
      console.log('Successfully submitted:', response);
      this.router.navigate(['/demandes']);
    },
    (error)=>{
      this.errorMessages = error.error.message;
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
