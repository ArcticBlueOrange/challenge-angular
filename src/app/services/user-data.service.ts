import { Injectable } from '@angular/core';
import { UserProfile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userProfile: UserProfile = { mail: '', theme: 'light', username: '' }

  constructor() {
    const ud = localStorage.getItem('userdata');
    if (ud) {
      this.userProfile = JSON.parse(ud);
    }
    this.setTheme();
  }

  get profile() {
    return this.userProfile;
  }

  get theme(): string {
    const t = this.userProfile.theme;
    return t || 'light';
  }

  get mail(): string {
    const t = this.userProfile.mail;
    return t || '';
  }

  get username(): string {
    const u = this.userProfile.username;
    return u || '';
  }

  update(newData: any) {
    this.userProfile = newData;
    localStorage.setItem('userdata', JSON.stringify(newData));
    this.setTheme();
  }

  setTheme() {
    const body = document.querySelector('body');
    const t = this.theme;
    if (body) {
      if (t == 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      }
    }
  }

}
