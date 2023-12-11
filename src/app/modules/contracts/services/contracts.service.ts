import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
