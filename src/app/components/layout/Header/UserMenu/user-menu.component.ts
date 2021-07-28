import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/database/auth.service';

@Component({
  selector: 'kit-topbar-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class TopbarUserMenuComponent {

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout();
    this.authService.checkAuth
  }
}
