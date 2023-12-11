import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  
  constructor(private http:HttpClient) { }
  getAllDemandes(){
    return this.http.get(environment.apiURL+'demandes');
  }
  saveDevis(description: string, demandes: any[], devisStatus: string){
    const body = {
      Terms: description,
      devisStatus: devisStatus,
      demandes: demandes
    };
    console.log(body);
    return this.http.post(environment.apiURL+'devis', body);
  }
  getAllDevis(){
    return this.http.get(environment.apiURL+'devis');
  }
}
