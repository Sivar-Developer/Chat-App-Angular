import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  api_url = environment.url;
  grant_type = environment.grant_type;
  client_id = environment.client_id;
  client_secret = environment.client_secret;

  constructor() { }
}
