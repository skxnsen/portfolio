import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent } from '../accordion/accordion.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CdBackComponent } from '../shared/cd-back/cd-back.component';
import { PageUpButtonComponent } from '../shared/page-up-button/page-up-button.component';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  { type: 'success', message: 'Currently developing this page 🔨🚧' },
  // { type: 'info', message: 'This is an info alert' },
  // { type: 'warning', message: 'This is a warning alert' },
  // { type: 'danger', message: 'This is a danger alert' },
  // { type: 'primary', message: 'This is a primary alert' },
  // { type: 'secondary', message: 'This is a secondary alert' },
  // { type: 'light', message: 'This is a light alert' },
  // { type: 'dark', message: 'This is a dark alert' },
];

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [AccordionComponent, NgbAlertModule, CdBackComponent, PageUpButtonComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../../styles.css']
})
export class SkillsComponent {
  alerts!: Alert[];

  constructor(private titleService: Title) {
    this.titleService.setTitle('MS Portfolio | Skills 🔭');
    this.reset();
  }

  reset() {
    this.alerts = ALERTS.map(alert => ({ ...alert }));
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
