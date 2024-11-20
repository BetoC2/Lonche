import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket | undefined;

  constructor() {
    if (!this.socket) this.socket = io(environment.apiUrl);
  }

  // Unirse a una sala
  joinRoom(userId: string): void {
    this.socket?.emit('joinRoom', userId);
  }

  // Emitir notificación de publicación (like o comentario)
  sendPostNotification(
    id_user: string,
    id_post: string,
    id_receiver: string,
    username: string,
    actionType: 'like' | 'comment',
  ): void {
    this.socket?.emit('sendPostNotification', {
      id_user,
      id_post,
      id_receiver,
      username,
      actionType,
    });
  }

  // Emitir notificación de seguimiento
  sendFollowNotification(
    id_user: string,
    id_receiver: string,
    username: string,
  ): void {
    this.socket?.emit('sendFollowNotification', {
      id_user,
      id_receiver,
      username,
      actionType: 'follow',
    });
  }

  // Escuchar notificaciones recibidas
  onReceiveNotification(callback: (notification: any) => void): void {
    this.socket?.on('receiveNotification', callback);
  }

  // Detener la escucha de notificaciones
  offReceiveNotification(): void {
    this.socket?.off('receiveNotification');
  }
}
