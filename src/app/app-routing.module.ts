import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'

// layouts & notfound
import { NotFoundComponent } from 'src/app/@kit/pages/404.component'

const COMPONENTS = [NotFoundComponent]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'chat',
        loadChildren: () => import('src/app/pages/chat/chat.module').then(m => m.ChatModule),
      },
      {
        path: 'people',
        loadChildren: () => import('src/app/pages/people/people.module').then(m => m.PeopleModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('src/app/pages/auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
  {
    path: 'admin',
    children: [
      {
        path: 'apps',
        loadChildren: () => import('src/app/@kit/pages/apps/apps.module').then(m => m.AppsModule),
      },
      {
        path: 'icons',
        loadChildren: () => import('src/app/@kit/pages/icons/icons.module').then(m => m.IconsModule),
      },
      {
        path: 'charts',
        loadChildren: () => import('src/app/@kit/pages/charts/charts.module').then(m => m.ChartsModule),
      },
      {
        path: 'cards',
        loadChildren: () => import('src/app/@kit/pages/cards/cards.module').then(m => m.CardsModule),
      },
      {
        path: 'advanced',
        loadChildren: () => import('src/app/@kit/pages/advanced/advanced.module').then(m => m.AdvancedModule),
      },
      {
        path: 'widgets',
        loadChildren: () => import('src/app/@kit/pages/widgets/widgets.module').then(m => m.WidgetsModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('src/app/@kit/pages/tables/tables.module').then(m => m.TablesModule),
      },
      {
        path: 'ui-kits',
        loadChildren: () => import('src/app/@kit/pages/ui-kits/ui-kits.module').then(m => m.UIKitsModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'widgets/general',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true,
    }),
  ],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule {}
