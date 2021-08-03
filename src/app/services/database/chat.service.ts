import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../ui/core.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  inbox() {
    return this.http.get<any>(this.core.api_url + '/api/chat/inbox')
  }

  conversation(conversationId: number) {
    return this.http.get<any>(this.core.api_url + `/api/chat/conversation/${conversationId}`)
  }

  conversationWithUser(userId: number) {
    return this.http.get<any>(this.core.api_url + `/api/chat/conversation/user/${userId}`);
  }

  storeMessage(data: any) {
    return this.http.post<any>(this.core.api_url + `/api/chat/message/store`, data)
  }


}
