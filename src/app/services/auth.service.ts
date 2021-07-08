import { Injectable } from '@angular/core';
import { IUserCredentials } from '../interfaces/user-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged: boolean;

  public get isLogged(): boolean {
    return this._isLogged;
  }

  public login(credentials: IUserCredentials): Promise<void> {
    this._isLogged = true;

    return Promise.resolve();
  }

  public logout(): void {
    this._isLogged = false;
  }

}
