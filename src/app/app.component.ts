import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Master list', url: '/master-list', icon: 'paper-plane' },
    { title: 'Sign In page', url: '', icon: 'mail' },
  ];

}
