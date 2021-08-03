import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/database/auth.service';
import { ChatService } from 'src/app/services/database/chat.service';
import { UserService } from 'src/app/services/database/user.service';
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
  name = ''
  // dialog = this.dialogs[this.activeIndex].dialog
  avatar = 'assets/images/avatars/1.jpg'

  users: any
  conversations: any
  messages: any
  message: string
  participantId: number

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private chatService: ChatService,
  ) {}

  ngOnInit() {
    this.chatInbox()
    this.usersIndex()
  }

  usersIndex() {
    this.userService.index().subscribe(response => {
      this.users = response
    })
  }

  chatInbox() {
    this.chatService.inbox().subscribe((response) => {
      this.conversations = response
      console.log(this.conversations)
    })
  }

  chatConversation(chatParticipants: any, conversationId: number) {
    chatParticipants.forEach(participant => {
      if(participant.user?.id != this.authService.user.id) {
        this.participantId = participant.user?.id
      }
    });
    this.message = null
    this.chatService.conversation(conversationId).subscribe((response) => {
      this.messages = response
      this.chatInbox()
    })
  }

  chatConversationWithUser(userId: number) {
    this.message = null
    this.chatService.conversationWithUser(userId).subscribe((response) => {
      this.messages = response
      this.participantId = userId
      this.chatInbox()
    })
  }

  chatStoreMessage(chat_conversation_id: number) {
    let data = {
      chat_conversation_id: chat_conversation_id,
      chat_participant_id: this.participantId,
      message: this.message
    }

    this.chatService.storeMessage(data).subscribe(() => {
      this.message = null
      this.chatService.conversation(chat_conversation_id).subscribe((response) => {
        this.messages = response
        this.chatInbox()
      })
    })
  }
  



}
