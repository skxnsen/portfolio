import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
import { CdBackComponent } from '../shared/cd-back/cd-back.component';
import { PageUpButtonComponent } from '../shared/page-up-button/page-up-button.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

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
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, CdBackComponent, PageUpButtonComponent, NgbAlertModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {
  alerts!: Alert[];

  reset() {
    this.alerts = ALERTS.map(alert => ({ ...alert }));
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  projects: Card[] = [
    {
      id: 1,
      name: 'Angular Web SPA',
      summary: 'A single-page web application developed using Angular.',
      description: 'This portfolio is a dynamic and responsive web application built using the latest Angular 19, showcasing my personal skills and projects. The SPA is designed in an HTB-inspired style with gray and lime colors, featuring a responsive layout and shared components. The portfolio includes sections such as Home, About, Skills, Projects, and Contact. Key features include its responsive design across all viewports and a modern tech stack. The SPA is deployed on Netlify, and the codebase is available on GitHub. UI end-to-end tests are written in TypeScript using Playwright.',
      projectLink: 'https://github.com/skxnsen/portfolio',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/portfolio/screen_1.png", "../../assets/projects/portfolio/screen_2.png", "../../assets/projects/portfolio/screen_3.png", "../../assets/projects/portfolio/screen_4.png",]
    },
    {
      id: 2,
      name: 'Project Name TBD',
      summary: 'Summary here. To be added later.',
      description: 'Description here. To be added later.',
      projectLink: 'https://github.com/emkeyen',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png"]
    },
    {
      id: 3,
      name: 'Project Name TBD',
      summary: 'Summary here. To be added later.',
      description: 'Description here. To be added later.',
      projectLink: 'https://github.com/emkeyen',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png"]
    },
    {
      id: 4,
      name: 'Project Name TBD',
      summary: 'Summary here. To be added later.',
      description: 'Description here. To be added later.',
      projectLink: 'https://github.com/emkeyen',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png"]
    },
    {
      id: 5,
      name: 'Project Name TBD',
      summary: 'Summary here. To be added later.',
      description: 'Description here. To be added later.',
      projectLink: 'https://github.com/emkeyen',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png"]
    },
    {
      id: 6,
      name: 'Project Name TBD',
      summary: 'Summary here. To be added later.',
      description: 'Description here. To be added later.',
      projectLink: 'https://github.com/emkeyen',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png", "../../assets/projects/dark-placeholder.png"]
    },

  ]

  constructor(private titleService: Title) {
    this.titleService.setTitle('MS Portfolio | Projects 📁')
  }

  ngOnInit(): void {
    this.reset();
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
