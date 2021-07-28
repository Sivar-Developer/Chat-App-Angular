import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HideTabBarDirective } from './hideTabBar/hide-tab-bar.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    HideTabBarDirective,
  ],
  providers: [],
  exports: [
    HideTabBarDirective,
  ]
})

export class DirectivesModule {}
