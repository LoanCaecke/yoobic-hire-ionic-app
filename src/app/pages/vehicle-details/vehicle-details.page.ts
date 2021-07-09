import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVehicle } from 'src/app/interfaces/vehicles.interface';
import { StarWarsService } from 'src/app/services/starWars.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
})
export class VehicleDetailsPage implements OnInit {

  public vehicle: IVehicle;

  constructor(private starWarsService: StarWarsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const vId: number = +this.route.snapshot.paramMap.get('id');
    this.vehicle = this.starWarsService.getVehicleDetails(vId);

    if(!this.vehicle) {
      this.router.navigate(['/vehicles']);
    }
  }

}
