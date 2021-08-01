import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../ui/core.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  index() {
    return this.http.get<any>(this.core.api_url + '/api/users')
  }
}
