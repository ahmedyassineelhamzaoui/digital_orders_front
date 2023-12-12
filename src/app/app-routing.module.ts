import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsComponent } from './modules/equipments/components/equipments/equipments.component';
import { CategoriesComponent } from './modules/categories/components/categories/categories.component';
import { ContractsComponent } from './modules/contracts/components/contracts/contracts.component';
import { NotfounderrorComponent } from './errors/components/notfounderror/notfounderror.component';
import { DemandesComponent } from './modules/demandes/components/demandes/demandes.component';
import { CreatDemandeComponent } from './modules/creat-demande/creat-demande.component';
import { DevisComponent } from './modules/devis/components/devis/devis.component';
import { UpdateDemandeComponent } from './modules/demandes/components/update-demande/update-demande.component';

const routes: Routes = [
  { path: 'devis', component: DevisComponent},
  { path: 'equipments', component: EquipmentsComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'demandes', component: DemandesComponent},
  { path: 'contracts', component: ContractsComponent},

  { path: '404', component: NotfounderrorComponent },
  { path: 'updateDemande/:id', component : UpdateDemandeComponent},
  { path: 'Creatdemande/:id', component : CreatDemandeComponent},
  { path: '', redirectTo: '/equipments', pathMatch: 'full'},
  { path: '**', redirectTo: '/404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
