import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidGear } from '@ng-icons/font-awesome/solid';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  viewProviders: [provideIcons({ faSolidGear })],
})
export class ProfileComponent {
  userImage =
    'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/238999684_243323974459354_1531315574661378271_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jn3fwNxsV50Q7kNvgGJKcdu&_nc_ht=scontent-qro1-2.xx&oh=00_AYArusfLVoWGA84_SL3rvlwaGWkgH0k07xouHArOEXJHPQ&oe=66FB6C29';
  userName = 'Alberto';

  constructor(private dashboard: DashboardComponent) {}

  logout() {
    this.dashboard.logout();
  }
}
