import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidGear } from '@ng-icons/font-awesome/solid';
import { faSolidArrowRightToBracket } from '@ng-icons/font-awesome/solid';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';
import { User } from '../../../../types/user';
import { AuthService } from '../../../../services/shared/auth.service';
import { MaterialModule } from '@modules/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDataComponent } from './profile-data/profile-data.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIconComponent, MaterialModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  viewProviders: [provideIcons({ faSolidGear, faSolidArrowRightToBracket })],
})
export class ProfileComponent {
  user: User | null = null;
  userImage = '';
  userName = 'User';
  readonly dialog = inject(MatDialog);

  constructor(
    private dashboard: DashboardComponent,
    authService: AuthService,
  ) {
    const user = authService.getUserData();
    this.userName = user?.username ? user.username : 'User';
    this.userImage = user?.profilePic ? user.profilePic : '';
  }

  openDialog() {
    this.dialog.open(ProfileDataComponent, {
      width: '500px',
    });
  }

  logout() {
    this.dashboard.logout();
  }
}
