import { Component, OnInit } from '@angular/core'
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { SwPush, SwUpdate } from '@angular/service-worker'
import { CoreService } from './services/ui/core.service'
import { AuthService } from './services/database/auth.service'

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

  update: boolean = false
  subscription: any

  constructor(
    updates: SwUpdate,
    private swPush: SwPush,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private core: CoreService,
    private auth: AuthService
  ) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    })
  }

  ngOnInit() {
    this.pushSubscription()
    this.backgroundSync()
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

    // this.titleService.setTitle( newTitle );
    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     map(() => this.activatedRoute),
    //     map(route => {
    //       while (route.firstChild) {
    //         route = route.firstChild
    //       }
    //       return route
    //     }),
    //     map(route => {
    //       while (route.firstChild) {
    //         route = route.firstChild
    //       }
    //       return route
    //     }),
    //     filter(route => route.outlet === 'primary'),
    //     mergeMap(route => route.data),
    //   )
    //   .subscribe(event =>
    //     this.titleService.setTitle(`Clean UI KIT Pro (Angular Edition)${event['title'] ? ' -' + event['title'] : ''}`),
    //   )
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

  pushSubscription() {
    if(!this.swPush.isEnabled) {
      console.log('Notification is not enabled')
      return;
    }

    this.swPush.requestSubscription({ serverPublicKey: this.core.sw_push.server_public_key })
    .then(sub => {
      this.subscription = JSON.stringify(sub)
      if(this.auth.checkAuth) {
        this.auth.pushNotificationSubscribe(this.subscription).subscribe(data => console.log(data))
      }
    })
    .catch(error => console.log(error))
  }

  backgroundSync() {
    navigator.serviceWorker.ready.then(reg => reg.sync.register('push-notification')).catch(console.log)
  }
}
