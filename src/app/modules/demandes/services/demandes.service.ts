import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {

  constructor(private http : HttpClient) { }
  getAllDemands(): Observable<any> {
    return this.http.get(environment.apiURL+'demandes');
  }
  statusChange(demandeId:number ,status:Object):Observable<any> {
    return this.http.put(environment.apiURL+'updateDemande/'+demandeId , status);
  }
  delete(demandeId:number):Observable<any> {
    return this.http.delete(environment.apiURL+'deleteDemande/'+demandeId);
  }
  
}
