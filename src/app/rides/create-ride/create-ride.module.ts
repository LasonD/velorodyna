import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRidePageRoutingModule } from './create-ride-routing.module';

import { CreateRidePage } from './create-ride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRidePageRoutingModule
  ],
  declarations: [CreateRidePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CreateRidePageModule {}
