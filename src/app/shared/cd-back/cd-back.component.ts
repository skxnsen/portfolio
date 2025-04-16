import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cd-back',
  template: `<div class="cd-back-btn-wrapper"><button class="cd-back-btn" (click)="goBack()">cd ..</button></div>`,
  styleUrls: ['./cd-back.component.css']
})
export class CdBackComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
