import { Component } from '@angular/core';

import { COMMON_NAMES, COMMON_TAGS } from './common-names';

/**
 * Demo app showing usage of the mentions directive.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: string[]|any = {
    '@': COMMON_NAMES,
    '#': COMMON_TAGS
  };
  //items: string[] = COMMON_NAMES;
}
