import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'transaction-app';
  constructor(private router: Router) {}
  navigateNavigateLogin() {
    this.router.navigate(['/login']);
  }
  handleBackToHome() {
    this.router.navigate(['/']);
  }
  navigateToTransaction() {
    this.router.navigate(['/transactions']);
  }
}
