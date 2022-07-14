import { Component, OnInit } from '@angular/core';
import { PagesService } from './pages.service';

@Component({
  selector: 'app-pages',
  template: `
    <app-header></app-header>
    <div class="content" role="main">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  constructor(private PagesService: PagesService) {}

  ngOnInit(): void {}
}
