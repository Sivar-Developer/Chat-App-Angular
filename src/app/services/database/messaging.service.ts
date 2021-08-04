import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private afMessaging: AngularFireMessaging) {
    this.requestPermission()
    this.receiveMessage()
  }

  requestPermission() {
    this.afMessaging.requestToken.subscribe((token: any) => {
      console.log(token); 
    }, (err: any) => console.error('Unable to get permission to notify.', err));
  }

  receiveMessage() {
    this.afMessaging.messages.subscribe((message: any) => {
      console.log("new message received. ", message);
      this.currentMessage.next(message);
    })
  }
  
}
