import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { HttpService } from 'app/services/shared/http-service.service';
import { Notification } from 'app/types/notification';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatListModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  private userID = localStorage.getItem('userID');

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.fetchNotifications();
  }

  fetchNotifications(): void {
    this.httpService
      .get<Notification[]>(`notifications/${this.userID}`)
      .subscribe({
        next: (data) => {
          this.notifications = data.map((notification) => {
            return {
              ...notification,
              timestamp: new Date(notification.timestamp),
            };
          });
        },
        error: (err) => {
          console.error('Error al obtener las notificaciones:', err);
        },
      });
  }

  clearNotifications() {
    this.notifications = [];
  }
}
