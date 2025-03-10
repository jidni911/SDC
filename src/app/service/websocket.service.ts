import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient: Client;
  private serverUrl = 'ws://localhost:3000/ws';

  constructor() {
    this.stompClient = new Client({
      brokerURL: this.serverUrl,
      reconnectDelay: 5000, // Auto-reconnect
    });

    this.stompClient.activate();
  }

  // Subscribe to messages
  subscribeToMessages(callback: (message: any) => void) {
    this.stompClient.onConnect = () => {
      this.stompClient.subscribe('/topic/messages', (message) => {
        callback(JSON.parse(message.body));
      });
    };
  }

  // Send message
  sendMessage(message: string) {
    this.stompClient.publish({ destination: '/app/sendMessage', body: message });
  }
}
