import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {

  constructor(private http:HttpClient) { }

  getAllEquipments(){
    return this.http.get(environment.apiURL+'equipments');
  }
}
