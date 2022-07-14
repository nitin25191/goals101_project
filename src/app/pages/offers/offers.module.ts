import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { OffersComponent } from './offers.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent,
  },
];

@NgModule({
  declarations: [OffersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SwiperModule,
    ModalModule.forRoot(),
  ],
  exports: [OffersComponent, RouterModule],
})
export class OffersModule {}
