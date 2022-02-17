import { Directive, TemplateRef } from '@angular/core';

/**
 * Holds a reference to a template holding content to display
 */
@Directive({
  selector: '[appViewMode]'
})
export class ViewModeDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
