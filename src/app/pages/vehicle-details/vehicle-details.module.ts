import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDetailsPageRoutingModule } from './vehicle-details-routing.module';

import { VehicleDetailsPage } from './vehicle-details.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    VehicleDetailsPageRoutingModule
  ],
  declarations: [VehicleDetailsPage]
})
export class VehicleDetailsPageModule {}
