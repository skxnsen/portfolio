import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('stickyHeader') headerElement!: ElementRef;
  @ViewChild('sidenav') sidenav: any;

  sticky = false;
  elementPosition: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.elementPosition = this.headerElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    this.sticky = windowScroll >= this.elementPosition;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768 && this.sidenav?.opened) {
      this.sidenav.close();
    }
  }
}
