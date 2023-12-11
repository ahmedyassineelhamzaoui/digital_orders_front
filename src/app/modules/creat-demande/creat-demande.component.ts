import { Component } from '@angular/core';
import { CreatDemandeServiceService } from './services/creat-demande-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-demande',
  templateUrl: './creat-demande.component.html',
  styleUrl: './creat-demande.component.scss'
})
export class CreatDemandeComponent {

    
  formData:any = {};

  constructor(
    private demandesService: CreatDemandeServiceService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.formData.equipmentId = this.route.snapshot.paramMap.get('id');
  }
  onSubmit() {
    this.formData.userId = "874c2bf8-a3ea-4bc6-95cc-9feddce4bd5a";
    this.demandesService.insertData(this.formData).subscribe(
      (response) => {
        console.log('Successfully submitted:', response);
        this.router.navigate(['/demandes']);
      },
      (error)=>{
        console.log(error.error)
      }
    );
  }
}
