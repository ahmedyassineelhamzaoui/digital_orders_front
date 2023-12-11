import { Component } from '@angular/core';
import { ContractsService } from '../../services/contracts.service';
import { log } from 'console';


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrl: './contracts.component.scss'
})
export class ContractsComponent {
  constructor(private contractService: ContractsService) {}

  ngOnInit() {
    this.contractService.getAllContract().subscribe((data : object) =>{
      console.log(data);
      
    })
  }
}
