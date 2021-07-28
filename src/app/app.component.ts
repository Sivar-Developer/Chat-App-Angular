import { Component, OnInit } from '@angular/core'
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'

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
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {}

  ngOnInit() {
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
}
