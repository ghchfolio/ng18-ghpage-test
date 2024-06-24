import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h3>Angular &amp; 18 ghPages</h3>
    <p>Quick test.</p>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng18-ghpage-test';
}
