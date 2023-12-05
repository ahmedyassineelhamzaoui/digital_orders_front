import { Component } from '@angular/core';
import { DemandesService } from '../../services/demandes.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrl: './demandes.component.scss'
})
export class DemandesComponent{
  demandes:any[] = [];
  constructor(private demandesService: DemandesService) { }
  ngOnInit() {
      this.demandesService.getAllDemands().subscribe(data => {
      this.demandes = data;
        console.log(data);
    });
  }
}
