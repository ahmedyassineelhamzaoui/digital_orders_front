import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  private baseURL = "http://localhost:8080/api/contracts";
  private saveUrl= "http://localhost:8080/api/save";

  constructor(private httpClient: HttpClient) { }
  
  getContractsList(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`);
  }

  archiveContract(contractId: String): Observable<string> {
    return this.httpClient.post<string>(`${this.baseURL}/archive-contract/${contractId}`, {});
  }


}
