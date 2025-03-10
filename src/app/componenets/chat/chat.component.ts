import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/service/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  newMessage = '';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.subscribeToMessages((message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.websocketService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
