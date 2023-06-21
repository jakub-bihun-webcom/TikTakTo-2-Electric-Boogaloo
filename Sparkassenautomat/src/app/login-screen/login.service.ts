import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  /**
   * Eine Liste von Benutzern mit ihren Eigenschaften
   */
  private readonly users: User[] = [
    { id: '1234', pin: '5678', userAccountMoney: 2300000, isAdmin: false },
    { id: '1', pin: '1', userAccountMoney: 11111, isAdmin: false },
    { id: '0000', pin: '1802349', userAccountMoney: 0, isAdmin: true }
  ];

  login(id: string, pin: string): User {
    const foundUser = this.users.find(user => user.id === id);
    if (foundUser === undefined || foundUser.pin !== pin) {
      throw new Error('Bitte überprüfen Sie Ihre Anmeldedaten');
    }
    return foundUser;
  }
}
