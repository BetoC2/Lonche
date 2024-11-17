import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatListModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  notifications = [
    { id: 1, message: 'You have a new message from John.' },
    { id: 2, message: 'Your order has been shipped.' },
    { id: 3, message: 'Reminder: Meeting at 3 PM.' },
    { id: 4, message: 'New comment on your post.' },
    { id: 5, message: 'Your subscription is about to expire.' },
    { id: 6, message: 'You have a new follower.' },
    { id: 7, message: 'Your password was changed successfully.' },
    { id: 8, message: 'You have a new friend request.' },
    { id: 9, message: 'Your profile was viewed 10 times today.' },
    { id: 10, message: 'You have a new message from Alice.' },
    { id: 11, message: 'Your order has been delivered.' },
    { id: 12, message: 'Reminder: Doctor appointment tomorrow.' },
    { id: 13, message: 'New like on your photo.' },
    { id: 14, message: 'Your account balance is low.' },
    { id: 15, message: 'You have a new message from Bob.' },
    { id: 16, message: 'Your package is out for delivery.' },
    { id: 17, message: 'Reminder: Project deadline next week.' },
    { id: 18, message: 'New comment on your video.' },
    { id: 19, message: 'Your subscription has been renewed.' },
    { id: 20, message: 'You have a new message from Charlie.' },
    { id: 21, message: 'Your order is being processed.' },
    { id: 22, message: 'Reminder: Gym session at 6 PM.' },
    { id: 23, message: 'New like on your comment.' },
    { id: 24, message: 'Your account was accessed from a new device.' },
    { id: 25, message: 'You have a new message from Dave.' },
    { id: 26, message: 'Your order has been canceled.' },
    { id: 27, message: 'Reminder: Team meeting tomorrow.' },
    { id: 28, message: 'New follower on your blog.' },
    { id: 29, message: 'Your profile was updated successfully.' },
    { id: 30, message: 'You have a new message from Eve.' },
  ];

  clearNotifications() {
    this.notifications = [];
  }
}
