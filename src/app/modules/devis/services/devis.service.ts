import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http:HttpClient) { }
  getAllDevis(){
    return this.http.get(environment.apiURL+'demandes');
  }
}
