import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nts-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  mainMenuLinks = [
    { text: 'Dashboard', url: '/' },
    { text: 'Comp. Basics', url: '/component-basics' },
    { text: 'Bindings', url: '/binding-examples' },
    { text: 'Inputs/Outputs', url: '/inputs-outputs-examples' },
    { text: 'Todos', url: '/todos' },
    { text: 'Heroes', url: '/heroes' },
    { text: 'Citites', url: '/cities' },
    { text: 'Real Estates', url: '/real-estates' },

    { text: 'Routing tasks', url: '/routing-tasks' },
    { text: 'Testing tasks', url: '/testing-tasks' },

    // { text: 'Pipes', url: '/pipes-examples' },
    { text: 'Forms tasks', url: '/forms-tasks' },
    { text: 'Dynamic Comp.', url: '/dynamic-components' },
    { text: 'Custom Directives', url: '/custom-directives' },
    { text: 'DI, providers', url: '/di-providers-examples' },
    { text: 'Content Projection', url: '/content-projection' },
    { text: 'Refs to tmpl. elements', url: '/refs-to-template-elements' },

    { text: 'RxJS GUI tasks', url: '/rxjs-gui-tasks' },
    { text: 'Adv Todos', url: '/advanced-todos' },
    { text: 'RxJS GitHub repos', url: '/rxjs-github-repos' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) { }
}
