import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <%= name.toProperCase() %>RoutingModule } from './<%= name.toKebabCase() %>-routing.module';

@NgModule({
  imports: [
    CommonModule,
    <%= name.toProperCase() %>RoutingModule
  ],
  declarations: []
})
export class <%= name.toProperCase() %>Module { }
