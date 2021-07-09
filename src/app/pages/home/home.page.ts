import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { IUserCredentials } from 'src/app/interfaces/user-credentials.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public credentials: IUserCredentials = {} as IUserCredentials;

  constructor(
    private authService: AuthService,
    private router: Router,
    public menuCtrl: MenuController,
    private toastCtrl: ToastController) { }

  public signIn(): void {
    this.authService.login(this.credentials).then(async () => {

      const toast = await this.toastCtrl.create({
        message: 'Login successful',
        duration: 1000,
        position: 'bottom'
      });
      toast.present();


      // redirect to master list
      this.router.navigate(['/master-list']);
    });
  }

  ionViewDidEnter(): void {
    // Disables the side menu for this page.
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave(): void {
    // Re-activate the side menu after login.
    this.menuCtrl.enable(true);
  }

}
