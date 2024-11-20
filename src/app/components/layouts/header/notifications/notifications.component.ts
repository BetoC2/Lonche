import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { HttpService } from 'app/services/shared/http-service.service';
import { SocketService } from 'app/services/shared/socket.service';
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

  constructor(
    private httpService: HttpService,
    private socketService: SocketService,
  ) {}

  ngOnInit(): void {
    this.fetchNotifications();
    this.listenToSocketNotifications();
    this.socketService.joinRoom(this.userID!);
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

  listenToSocketNotifications(): void {
    this.socketService.onNotification((notification) => {
      console.log('Notificación recibida:', notification);
      this.notifications.unshift(notification); // Agregar la nueva notificación al inicio de la lista
    });
  }

  clearNotifications(): void {
    this.notifications = [];
  }
}
