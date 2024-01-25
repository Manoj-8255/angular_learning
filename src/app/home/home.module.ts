import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomersModule } from '../customers/customers.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, CustomersModule],
  declarations: [],
})
export class HomeModule {}
