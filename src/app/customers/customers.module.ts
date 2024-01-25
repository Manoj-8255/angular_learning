import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { PaginatorComponent } from '../paginator/paginator.component';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule],
  declarations: [CustomersComponent, PaginatorComponent],
})
export class CustomersModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
