import { Component, ElementRef, ViewChild } from '@angular/core';

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
  @ViewChild('comment') comment:ElementRef;
  items: string[]|any = {
    '@': COMMON_NAMES,
    '#': COMMON_TAGS
  };
  //items: string[] = COMMON_NAMES;
  triggerEvent(triggerChar) {
    this.comment.nativeElement.value = this.comment.nativeElement.value + triggerChar;
    this.comment.nativeElement.focus();
    this.comment.nativeElement.dispatchEvent(new KeyboardEvent('keyup', {'key': triggerChar}));
  };

  setFocus(item) {
    console.log(item);
    this.comment.nativeElement.focus();
  }

}
