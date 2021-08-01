import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/database/chat.service';
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss']
})
export class ChatInboxComponent implements OnInit {

  dialogs = data
  activeIndex = 0
  name = this.dialogs[this.activeIndex].name
  position = this.dialogs[this.activeIndex].position
  dialog = this.dialogs[this.activeIndex].dialog
  avatar = this.dialogs[this.activeIndex].avatar

  conversations: any

  constructor(
    private chatService: ChatService
  ) {}

  ngOnInit() {
    this.chatInbox()
  }

  changeDialog(index) {
    this.activeIndex = index
    this.name = this.dialogs[index].name
    this.position = this.dialogs[index].position
    this.dialog = this.dialogs[index].dialog
    this.avatar = this.dialogs[index].avatar
  }

  chatInbox() {
    this.chatService.inbox().subscribe((response) => {
      this.conversations = response
      console.log(this.conversations)
    })
  }



}
