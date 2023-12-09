import { Component } from '@angular/core';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrl: './contracts.component.scss'
})
export class ContractsComponent {
  contracts:any[]= [];

  constructor(private contractService: ContractsService) {  }

  ngOnInit() {
   this.getContracts();
  }

  private getContracts(){
    this.contractService.getContractsList().subscribe((data:any) => {
      this.contracts = data;
      console.log(data)
    });

  }
}
