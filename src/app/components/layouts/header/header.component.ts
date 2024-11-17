import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidBell } from '@ng-icons/font-awesome/solid';
import { MaterialModule } from '@modules/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, MaterialModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  viewProviders: [provideIcons({ faSolidBell })],
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(NotificationsComponent, {
      width: '500px',
    });
  }
}
