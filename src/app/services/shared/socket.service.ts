import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(environment.apiUrl); // Cambia esto por tu URL del backend
  }

  joinRoom(userId: string): void {
    this.socket.emit('joinRoom', userId);
  }

  emitFollowNotification(data: any): void {
    this.socket.emit('sendFollowNotification', data);
  }

  onNotification(callback: (notification: any) => void): void {
    this.socket.on('receiveNotification', callback);
  }

  disconnect(): void {
    this.socket.disconnect();
  }
}