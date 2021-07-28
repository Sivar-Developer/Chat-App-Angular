import { NgModule } from '@angular/core';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { SharedModule } from 'src/app/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';



@NgModule({
  declarations: [ChatInboxComponent],
  imports: [
    SharedModule, ChatRoutingModule, FormsModule, ReactiveFormsModule, PerfectScrollbarModule
  ]
})
export class ChatModule { }
