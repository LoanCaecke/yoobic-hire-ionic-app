import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterListPageRoutingModule } from './master-list-routing.module';

import { MasterListPage } from './master-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    MasterListPageRoutingModule
  ],
  declarations: [MasterListPage]
})
export class MasterListPageModule {}
