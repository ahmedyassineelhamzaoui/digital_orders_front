import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsComponent } from './modules/equipments/components/equipments/equipments.component';
import { CategoriesComponent } from './modules/categories/components/categories/categories.component';
import { NotfounderrorComponent } from './errors/components/notfounderror/notfounderror.component';
import { DemandesComponent } from './modules/demandes/components/demandes/demandes.component';
const routes: Routes = [
  { path: 'equipments', component: EquipmentsComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'demandes', component: DemandesComponent},
  { path: '404', component: NotfounderrorComponent },
  { path: '', redirectTo: '/equipments', pathMatch: 'full'},
  { path: '**', redirectTo: '/404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
