import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreenPageRoutingModule } from './green-routing.module';

import { GreenPage } from './green.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreenPageRoutingModule
  ],
  declarations: [GreenPage]
})
export class GreenPageModule {}
