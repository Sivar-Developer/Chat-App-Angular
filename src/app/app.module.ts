import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, LOCALE_ID } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { NgProgressHttpModule } from '@ngx-progressbar/http'

import { IconDefinition } from '@ant-design/icons-angular'
import * as AllIcons from '@ant-design/icons-angular/icons'
import { NZ_ICONS } from 'ng-zorro-antd'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutComponentsModule } from 'src/app/components/layout/layout.module'
import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

/**
 * Locale Registration
 */
import { registerLocaleData } from '@angular/common'
import { default as localeEn } from '@angular/common/locales/en'
import { NZ_I18N, en_US as localeZorro } from 'ng-zorro-antd'
import { HttpInterceptorService } from './services/ui/http-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker'

const LOCALE_PROVIDERS = [
  { provide: LOCALE_ID, useValue: 'en' },
  { provide: NZ_I18N, useValue: localeZorro },
]
registerLocaleData(localeEn, 'en')
/**
 * AntDesign Icons
 */
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition
}
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    /**
     * Nprogress Modules
     */
    NgProgressModule.withConfig({
      thick: true,
      spinner: false,
      color: '#0190fe',
    }),
    NgProgressRouterModule,
    NgProgressHttpModule,

    /**
     * Routing Module
     */
    AppRoutingModule,

    /**
     * Layout Components
     */
    LayoutComponentsModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    ServiceWorkerModule.register('service-worker.js', { enabled: environment.production }),
  ],
  providers: [...LOCALE_PROVIDERS, { provide: NZ_ICONS, useValue: icons }, { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
