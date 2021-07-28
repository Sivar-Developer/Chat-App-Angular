/**
  Clever way to set @Input to the Host component from a directive:
  https://github.com/angular/angular/issues/13776#issuecomment-270396444
*/

import { Directive, Host, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { debounce } from 'lodash';

const MIN_SCROLL_TOP = 80;
const BRING_BACK_DURATION = 2000;

@Directive({
  selector: '[hideTabBar]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideTabBarDirective {
  tabBar: HTMLElement;
  lastScrollTop: number;
  isGoingDown: boolean = false;
  isTabBarVisible: boolean = true;

  constructor(
    @Host() private content: IonContent,
    public renderer: Renderer2,
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.content.scrollEvents = true;
    this.tabBar = document.querySelector('ion-tab-bar');
    this.resetTabBar();

    // Adjust CSS bottom of TabBar if safe-area-inset-bottom is available
    const safeAreaBottomPx = getComputedStyle(this.tabBar).getPropertyValue('--device-safe-area');
    if (parseInt(safeAreaBottomPx) > 0) {
      this.renderer.setStyle(this.tabBar, 'bottom', safeAreaBottomPx);
    }

    // TODO: bring the tab bar back on Route change (e.g Home --> Pin Detail)
    const currentRoute = this.router.url;// '/tabs/home'

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        if (event.url !== currentRoute) {
          this.resetTabBar();
        }
      }
    });
  }

  onContentScroll(event: any) {
    const scrollTop = event.detail.scrollTop;

    if (scrollTop > MIN_SCROLL_TOP && scrollTop > this.lastScrollTop) {
      // We're going DOWN 🔽
      this.isGoingDown = true;
      this.hideTabBar();
    } else if (scrollTop < this.lastScrollTop){
      // We're going UP 🔼
      this.isGoingDown = false;
      this.resetTabBar();
    }

    this.lastScrollTop = event.detail.scrollTop;

    // Bring the tabbar back if user stops scrolling DOWN
    if (this.isGoingDown) {
      this.debouncedShowTabBar();
    }
  }

  resetTabBar() {
    if (this.isTabBarVisible) return;
    this.renderer.setStyle(this.tabBar, 'opacity', '1');
    this.renderer.setStyle(this.tabBar, 'pointer-events', 'inherit');
    this.isTabBarVisible = true;
  }

  hideTabBar() {
    if (!this.isTabBarVisible) return;
    this.renderer.setStyle(this.tabBar, 'opacity', '0');
    this.renderer.setStyle(this.tabBar, 'pointer-events', 'none');
    this.isTabBarVisible = false;
  }

  debouncedShowTabBar = debounce(this.resetTabBar, BRING_BACK_DURATION);

}
