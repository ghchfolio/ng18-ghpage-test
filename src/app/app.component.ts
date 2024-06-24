import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `
    <h3>Angular &amp; 18 ghPages</h3>
    <p>Quick test.</p>
    <ol>
        <li>repo must be public 👎</li>
        <li>npm i angular-cli-ghpages --save-dev</li>
        <li>ng build --base-href "/REPOSITORY_NAME/"</li>
        <li>npx angular-cli-ghpages --dir=dist/[PROJECTNAME]/browser</li>
        <li>visit https://[GITHUBUSERNAME].github.io/[PROJECTNAME]/
    </ol>

    <h4>Links</h4>
    <ul>
        <li>
            <a href="https://github.com/angular-schule/angular-cli-ghpages/blob/main/docs/README_standalone.md" target="_blank">
                angular-cli-ghpages
            </a>
        </li>
    </ul>
    <router-outlet />
  `,
    styles: [],
})
export class AppComponent {
    title = 'ng18-ghpage-test';
}
