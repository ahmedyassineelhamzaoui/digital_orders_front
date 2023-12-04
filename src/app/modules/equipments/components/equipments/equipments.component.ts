import { Component } from '@angular/core';
import { EquipmentsService } from '../../services/equipments.service';
import { CategoriesService } from '../../../categories/services/categories.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.scss'
})
export class EquipmentsComponent {
  equipments:any[] = [];
  categories:any[] = [];
  errorMessage: string | null = null;
  isLoading : boolean = false;
  constructor(
    private equipmentService:EquipmentsService,
    private categoryService:CategoriesService
    ) { }
  ngOnInit() {
      this.isLoading = true;
      this.getAllCategories();

      this.getAllEquipments();
  }
  getAllEquipments(){
    this.equipmentService.getAllEquipments().subscribe((data:any) => {
      this.equipments = data.equipments;
      this.errorMessage = null;
      this.isLoading = false;
    }, (error) => {
      this.errorMessage = error.error.timestamp +" status: "+ error.error.status +" error: "+ error.error.error +" path: "+ error.error.path;
      this.isLoading = false;
    });
  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((data:any) => {
      this.isLoading = false;
      this.errorMessage = null;
      this.categories = data.categories;
    },(error) => {
      this.errorMessage = "status: "+error.error.status;
      this.isLoading = false;
    });
  }

}
