import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-up-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-up-button.component.html',
  styleUrls: ['./page-up-button.component.css']
})
export class PageUpButtonComponent {
  isVisible: boolean = false;

  // Listen to window scroll events
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isVisible = window.scrollY > 100; // Show after scrolling more than 100px
  }

  // Scroll to the top of the page
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
