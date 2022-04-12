import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ParentbComponent } from './parentb/parentb.component';
import { ChildbComponent } from './parentb/childb/childb.component';
import { ConsumeParamsComponent } from './consume-params/consume-params.component';


@NgModule({
  declarations: [
    MenuComponent,
    ParentbComponent,
    ChildbComponent,
    ConsumeParamsComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
