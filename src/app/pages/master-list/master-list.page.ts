import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IVehicle } from 'src/app/interfaces/vehicles.interface';
import { StarWarsService } from 'src/app/services/starWars.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.page.html',
  styleUrls: ['./master-list.page.scss'],
})
export class MasterListPage implements OnInit {

  public $vehiclesObservable: Observable<any>;

  public vehicles: IVehicle[];

  constructor(
    private starWarsService: StarWarsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.starWarsService.getAllVehicles().then((vehicles: IVehicle[]) => {
      this.vehicles = vehicles;
    });
  }


  navigateTodetails(vehicle: IVehicle) {
    this.router.navigate(['vehicle/'+ vehicle.id]);
  }
}
