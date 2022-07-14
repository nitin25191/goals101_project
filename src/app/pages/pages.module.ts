import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HeaderModule } from '../lib-module/header/header.module';
import { PagesService } from './pages.service';

const routes: Routes = [
  {
    path: 'offers/:userid',
    loadChildren: () =>
      import('./offers/offers.module').then((m) => m.OffersModule),
    // title: 'My Offers',
  },
  {
    path: 'offer-detail/:couponid',
    loadChildren: () =>
      import('./offer-detail/offer-detail.module').then(
        (m) => m.OfferDetailModule
      ),
    // title: 'Offers',
  },
  {
    path: 'pagenotfound',
    loadChildren: () =>
      import('./pagenotfound/pagenotfound.module').then(
        (m) => m.PageNotFoundModule
      ),
    // title: 'My Offers',
  },
  { path: '', redirectTo: '/pagenotfound', pathMatch: 'full' },
  { path: '**', redirectTo: '/pagenotfound', pathMatch: 'full' },
];

@NgModule({
  declarations: [PagesComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, HeaderModule],
  providers: [PagesService],
  exports: [PagesComponent, RouterModule, BrowserModule, HttpClientModule],
})
export class PagesModule {}
