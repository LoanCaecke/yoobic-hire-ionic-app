import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';



@NgModule({
  declarations: [
    VehicleItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    VehicleItemComponent
  ]
})
export class ComponentsModule { }
