import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor(private http:HttpClient) { }

  getAllContract(){
    return this.http.get(environment.apiURL+'contracts');
  }
}
