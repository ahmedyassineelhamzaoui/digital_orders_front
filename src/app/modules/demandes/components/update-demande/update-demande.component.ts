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
  demandeId:string |null= "";
  constructor(
    private demandesService: DemandesService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(){
    this.demandeId= this.route.snapshot.paramMap.get('id');
  }
  onUpdate(){
    this.demandesService.update(this.demandeId , this.formInfo).subscribe(  
      (response) => {
      console.log('Successfully submitted:', response);
    })
  }
}
