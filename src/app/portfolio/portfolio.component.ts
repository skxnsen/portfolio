import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
import { CdBackComponent } from '../shared/cd-back/cd-back.component';
import { PageUpButtonComponent } from '../shared/page-up-button/page-up-button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, CdBackComponent, PageUpButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Angular Web SPA',
      summary: 'A single-page web application developed using Angular.',
      description: 'This portfolio is a dynamic and responsive web application built using the latest Angular 19, showcasing my personal skills and projects. The SPA is designed in an HTB-inspired style with gray and lime colors, featuring a responsive layout and shared components. The portfolio includes sections such as Home, About, Skills, Projects, and Contact. Key features include its responsive design across all viewports and a modern tech stack. The SPA is deployed on Netlify, and the codebase is available on GitHub. UI end-to-end tests are written in TypeScript using Playwright.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png"]
    },
    {
      id: 2,
      name: 'Angular Web SPA',
      summary: 'A single-page web application developed using Angular.',
      description: 'This portfolio is a dynamic and responsive web application built using the latest Angular 19, showcasing my personal skills and projects. The SPA is designed in an HTB-inspired style with gray and lime colors, featuring a responsive layout and shared components. The portfolio includes sections such as Home, About, Skills, Projects, and Contact. Key features include its responsive design across all viewports and a modern tech stack. The SPA is deployed on Netlify, and the codebase is available on GitHub. UI end-to-end tests are written in TypeScript using Playwright.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png"]
    },
    {
      id: 3,
      name: 'Angular Web SPA',
      summary: 'A single-page web application developed using Angular.',
      description: 'This portfolio is a dynamic and responsive web application built using the latest Angular 19, showcasing my personal skills and projects. The SPA is designed in an HTB-inspired style with gray and lime colors, featuring a responsive layout and shared components. The portfolio includes sections such as Home, About, Skills, Projects, and Contact. Key features include its responsive design across all viewports and a modern tech stack. The SPA is deployed on Netlify, and the codebase is available on GitHub. UI end-to-end tests are written in TypeScript using Playwright.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png"]
    },
    {
      id: 4,
      name: 'Angular Web SPA',
      summary: 'A single-page web application developed using Angular.',
      description: 'This portfolio is a dynamic and responsive web application built using the latest Angular 19, showcasing my personal skills and projects. The SPA is designed in an HTB-inspired style with gray and lime colors, featuring a responsive layout and shared components. The portfolio includes sections such as Home, About, Skills, Projects, and Contact. Key features include its responsive design across all viewports and a modern tech stack. The SPA is deployed on Netlify, and the codebase is available on GitHub. UI end-to-end tests are written in TypeScript using Playwright.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png"]
    },
    {
      id: 5,
      name: 'Angular Web SPA',
      summary: 'A single-page web application developed using Angular.',
      description: 'This portfolio is a dynamic and responsive web application built using the latest Angular 19, showcasing my personal skills and projects. The SPA is designed in an HTB-inspired style with gray and lime colors, featuring a responsive layout and shared components. The portfolio includes sections such as Home, About, Skills, Projects, and Contact. Key features include its responsive design across all viewports and a modern tech stack. The SPA is deployed on Netlify, and the codebase is available on GitHub. UI end-to-end tests are written in TypeScript using Playwright.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png"]
    },
    {
      id: 6,
      name: 'Angular Web SPA',
      summary: 'A single-page web application developed using Angular.',
      description: 'This portfolio is a dynamic and responsive web application built using the latest Angular 19, showcasing my personal skills and projects. The SPA is designed in an HTB-inspired style with gray and lime colors, featuring a responsive layout and shared components. The portfolio includes sections such as Home, About, Skills, Projects, and Contact. Key features include its responsive design across all viewports and a modern tech stack. The SPA is deployed on Netlify, and the codebase is available on GitHub. UI end-to-end tests are written in TypeScript using Playwright.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png", "../../assets/projects/project1.png"]
    },

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('MS Portfolio | Projects 📁')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
