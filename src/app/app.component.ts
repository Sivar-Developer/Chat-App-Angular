import { Component, OnInit } from '@angular/core'
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { SwPush, SwUpdate } from '@angular/service-worker'
import { CoreService } from './services/ui/core.service'
import { AuthService } from './services/database/auth.service'
import { AngularFireMessaging } from '@angular/fire/messaging'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <kit-header></kit-header>
      <div class="container-fluid" style="max-width: 1440px;">
        <ng-progress></ng-progress>
        <router-outlet></router-outlet>
        <kit-footer></kit-footer>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
    private afMessaging: AngularFireMessaging
  ) {
  }

  ngOnInit() {
    this.requestPermission()
    // set page title from router data variable
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(
          ' | ',
        )
        this.titleService.setTitle(
          `${title ? title + ' - ' : ''}Chat App `,
        )
      }
    })
  }

  getTitle(state, parent) {
    const data = []
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title)
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)))
    }
    return data
  }

  // Angular Firebase Messaging
  requestPermission() {
    this.afMessaging.requestPermission.subscribe((token) => {
      console.log("Permission Granted.")
      this.afMessaging.requestToken.subscribe((token) => {
        console.log(token)
      })
     },
     (error) => { console.error(error) }
     )
  }

  listen() {
    //
  }

}
