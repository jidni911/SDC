import { environment } from 'src/environment';
import { MessegeService } from './../../service/messege.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-messges',
  templateUrl: './messges.component.html',
  styleUrls: ['./messges.component.scss']
})
export class MessgesComponent implements OnInit , OnDestroy{
  apiUrl = environment.apiUrl;
  currentUserId = AppComponent.getUser().id
  constructor(private messegeService: MessegeService) { }
  messeges: any[] = []
  interval: any = null;
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  ngOnInit(): void {
    this.messegeService.getChats().subscribe((res: any) => {
      this.chats = res.content
      this.oldChats = this.chats
      this.startInterval()
    })
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.refreshChats()
    }, 2000)
  }

  refreshChats() {
    this.messegeService.getChats().subscribe((res: any) => {
      this.chats = res.content
    })
    if (this.selectedChat) {
      this.selectChat(this.selectedChat);
    }
  }
  hasNew(chat: any) {
    let id = chat.id;
    let old = this.oldChats.find((v) => v.id === id).messegeCount
    let n = chat.messegeCount

    return n - old;
  }


  searchText = '';
  messageText: string = '';
  selectedChat: any = null;

  chats: any[] = [];
  filteredChats: any[] = [];
  oldChats: any[] = [];

  selectChat(chat: any) {
    this.selectedChat = chat;
    this.messegeService.getMesseges(chat.id).subscribe((res: any) => {
      this.messeges = res.content
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    })
    let old = this.oldChats.find((v) => v.id === chat.id);
    if (old) {
      this.oldChats.splice(this.oldChats.indexOf(old), 1);
    }
    this.oldChats.push(chat);
  }
  scrollToBottom() {
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }


  sendMessage() {
    if (this.messageText.trim() === '') return;
    this.messegeService.sendMessage({ messege: this.messageText, chatId: this.selectedChat.id }).subscribe((res: any) => {
      this.messeges.push(res)
      this.messageText = '';
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    })
  }

  filterChats() {
    if (this.searchText === '') {
      this.filteredChats = []
      return;
    }
    this.filteredChats = this.chats.filter(chat => chat.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  getImageUrl(chat: any) {
    if (chat.groupImage) {
      return this.apiUrl + chat.groupImage?.url
    }
    return 'assets/logo/pigeon.webp'
  }


  chatName: string = '';
  searchTerm: string = '';
  suggestedUsers: any[] = [];
  selectedUsers: any[] = [];
  searchUsers() {
    this.messegeService.getSuggestions(this.searchTerm).subscribe((res: any) => {
      let users = res.content;
      users = users.filter((user: any) => user.id !== this.currentUserId);
      this.suggestedUsers = users.filter((user: any) => !this.selectedUsers.find((selectedUser: any) => selectedUser.id === user.id));
    })
  }

  selectUser(user: any) {
    if (this.selectedUsers.find(u => u.id === user.id)) return
    this.selectedUsers.push(user);
    // this.searchTerm = '';
    this.suggestedUsers = this.suggestedUsers.filter(u => u.id !== user.id);
  }
  removeUser(user: any) {
    this.selectedUsers = this.selectedUsers.filter(u => u.id !== user.id);
    this.suggestedUsers.push(user);
  }

  createChat() {
    this.messegeService.createChat(this.chatName, this.selectedUsers.map(u => u.id)).subscribe((res: any) => {
      this.chats.push(res)
      this.filteredChats.push(res)
      this.selectedUsers = []
      this.chatName = ''
      this.searchTerm = ''
      this.suggestedUsers = []
      this.selectedChat = res
      const modalElement = document.getElementById('modalId');
      if (modalElement) {
        const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
        modal.hide(); // Close modal
        // 🔥 Remove the remaining backdrop manually
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }

        // 🔥 Also remove "modal-open" class from body to prevent scroll issues
        document.body.classList.remove('modal-open');
      }

    })
  }
}
