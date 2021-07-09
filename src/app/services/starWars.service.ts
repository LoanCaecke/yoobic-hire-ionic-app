import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVehicle } from '../interfaces/vehicles.interface';

@Injectable({ providedIn: 'root' })
export class StarWarsService {

    private cachedVehicles: IVehicle[];

    constructor(private httpClient: HttpClient) { }

    public async getAllVehicles(): Promise<IVehicle[]> {
        // If already cached vehicles, use it instead
        if (this.cachedVehicles) { return this.cachedVehicles; }

        const data: any = await this.httpClient.get('https://swapi.dev/api/vehicles/').toPromise();

        data.results.forEach((item, i) => {
            // surprisingly swapi doesn't give id to their objects, so we had it manually here
            item.id = i + 1;

            // Add unique royalty free image to each item
            item.img_url = 'https://source.unsplash.com/random/600x200?sig=' + item.id;
        });

        this.cachedVehicles = data.results;

        return this.cachedVehicles;
    }

    public getVehicleDetails(id: number): IVehicle {
        if (this.cachedVehicles) {
            return this.cachedVehicles[id - 1];
        }
        // else if the app is accessed directly from this page
        // do a new API call with id or redirect to the list page depending on the specs...
        return null;
    }
}
