import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YellowPageRoutingModule } from './yellow-routing.module';

import { YellowPage } from './yellow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YellowPageRoutingModule
  ],
  declarations: [YellowPage]
})
export class YellowPageModule {}
