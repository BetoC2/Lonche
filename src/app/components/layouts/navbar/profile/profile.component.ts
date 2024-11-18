import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidGear } from '@ng-icons/font-awesome/solid';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';
import { User } from '../../../../types/user';
import { AuthService } from '../../../../services/shared/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  viewProviders: [provideIcons({ faSolidGear })],
})
export class ProfileComponent {
  user: User | null = null;
  userImage = '';
  userName = 'User';

  constructor(
    private dashboard: DashboardComponent,
    authService: AuthService,
  ) {
    const user = authService.getUserData();
    this.userName = user?.username ? user.username : 'User';
    this.userImage = user?.profilePic ? user.profilePic : '';
  }

  logout() {
    this.dashboard.logout();
  }
}
