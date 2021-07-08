import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserCredentials } from 'src/app/interfaces/user-credentials.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public credentials: IUserCredentials = {} as IUserCredentials;

  constructor(private authService: AuthService, private router: Router) {}

  public signIn(): void {
    this.authService.login(this.credentials).then(() => {
      // redirect to master list
      this.router.navigate(['/master-list']);
    });
  }

}
