import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OfferDetailComponent } from './offer-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path: '',
    component: OfferDetailComponent,
  },
];

@NgModule({
  declarations: [OfferDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ModalModule.forRoot()],
  exports: [RouterModule, OfferDetailComponent],
})
export class OfferDetailModule {}
