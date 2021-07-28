import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { SharedModule } from 'src/app/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChatInboxComponent],
  imports: [
    SharedModule, ChatRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class ChatModule { }
