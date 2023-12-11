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
  archiveContract(id: string | undefined): void {
    if (id) {
      // const contractId = id.toString();
      this.contractService.archiveContract(id).subscribe(
        (response) => {
          console.log(response);
          
        },
        (error: any) => {
          console.error('Error archiving contract:', error);
        }
      );
    }
  }
}
