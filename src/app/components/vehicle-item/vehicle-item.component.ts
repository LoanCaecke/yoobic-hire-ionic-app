import { Component, Input } from '@angular/core';
import { IVehicle } from 'src/app/interfaces/vehicles.interface';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss'],
})
export class VehicleItemComponent {

  @Input() vehicle: IVehicle;
  @Input() detailledMode: boolean;
}
