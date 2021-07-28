import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';

const routes: Routes = [
  {
    path: '',
    component: ChatInboxComponent,
    data: { title: 'Chat Inbox' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ChatRoutingModule { }
