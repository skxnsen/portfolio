import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CdBackComponent } from '../shared/cd-back/cd-back.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CdBackComponent],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css',
    '../../styles.css'
  ]
})
export class ContactComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('MS Profile | Contact ✍🏻')
  }
}
