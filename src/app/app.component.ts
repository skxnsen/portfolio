import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { CdBackComponent } from './shared/cd-back/cd-back.component';
import { PageUpButtonComponent } from './shared/page-up-button/page-up-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CdBackComponent,
    PageUpButtonComponent,
    CommonModule,
    PreloaderComponent
  ]
})
export class AppComponent {
  isLoading = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => this.isLoading = false, 500); // Delay to show preloader
      }
    });
  }
}
