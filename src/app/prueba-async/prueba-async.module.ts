import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Principal_async_Component } from './pages/principal/principal.page.component';
import { RouterRoutingModule } from './router-routing.module';



@NgModule({
  declarations: [
    Principal_async_Component
  ],
  imports: [
    CommonModule,RouterRoutingModule
  ],
  exports: [Principal_async_Component]
})
export class PruebaAsyncModule { }
