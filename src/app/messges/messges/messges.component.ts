import { MessegeService } from './../../service/messege.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messges',
  templateUrl: './messges.component.html',
  styleUrls: ['./messges.component.scss']
})
export class MessgesComponent implements OnInit {
  constructor(private messegeService : MessegeService) { }
  messeges : any[] = []
  ngOnInit(): void {
    this.messegeService.getMesseges().subscribe((res:any) => {
      this.messeges = res.content
    })
  }


//TODO work on api



  searchText = '';
  messageText: string = '';
  selectedChat: any = null;

  chats = [
    {
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      unreadCount: 2,
      messages: [
        { sender: 'me', text: 'Hello!', time: '10:01 AM' },
        { sender: 'other', text: 'Hi there!', time: '10:02 AM' },
        { sender: 'me', text: 'How are you?', time: '10:05 AM' },
        { sender: 'other', text: 'I am doing good, thanks!', time: '10:06 AM' }
      ]
    },
    {
      name: 'Jane Smith',
      lastMessage: 'Let’s meet tomorrow.',
      unreadCount: 1,
      messages: [
        { sender: 'other', text: 'Hey, when are you free?', time: '09:30 AM' },
        { sender: 'me', text: 'Tomorrow works!', time: '09:35 AM' },
      ]
    },
    {
      name: 'Robert Brown',
      lastMessage: 'Check this out!',
      unreadCount: 0,
      messages: [
        { sender: 'other', text: 'Look at this meme!', time: '08:30 AM' },
        { sender: 'me', text: 'Haha, that’s funny!', time: '08:32 AM' }
      ]
    }
  ];

  selectChat(chat: any) {
    this.selectedChat = chat;
    // Reset unread count when the chat is selected
    chat.unreadCount = 0;
  }

  sendMessage() {
    if (this.messageText.trim() === '') return;
    this.selectedChat.messages.push({
      sender: 'me',
      text: this.messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    this.messageText = '';
  }

  filterChats() {
    this.chats = this.chats.filter(chat => chat.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
