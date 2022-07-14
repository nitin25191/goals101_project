import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: PagesNotFoundComponent,
  }
];

@NgModule({
  declarations: [PagesNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
   
  ],
  exports: [PagesNotFoundComponent, RouterModule],
})
export class PageNotFoundModule {}
