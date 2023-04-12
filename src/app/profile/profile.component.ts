import { Component } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup } from '@angular/forms';
import { UserProfile } from '../models/profile';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  userForm = this.fb.group({
    mail: [this.user.mail],
    theme: [this.user.theme],
  })

  userProfile: UserProfile = { mail: '', theme: 'light' }

  constructor(private fb: FormBuilder, public user: UserDataService) {
    this.userProfile = user.profile;
  }

  onSubmit() {
    this.user.update(this.userForm.value);
  }

}
