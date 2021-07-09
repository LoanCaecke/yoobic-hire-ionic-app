import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./pages/master-list/master-list.module').then( m => m.MasterListPageModule)
  },
  {
    path: 'vehicle/:id',
    loadChildren: () => import('./pages/vehicle-details/vehicle-details.module').then( m => m.VehicleDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
