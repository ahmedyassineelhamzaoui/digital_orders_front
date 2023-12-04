import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  categories:any[] = [];
  constructor(private categoryService:CategoriesService) { }
  
  ngOnInit() {
      this.getAllCategories();
  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((data:any) => {
      this.categories = data.categories;
    });
  }
}
