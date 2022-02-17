import { Directive, TemplateRef } from '@angular/core';

/**
 * Holds a reference to a template holding content to display
 */
@Directive({
  selector: '[appEditMode]'
})
export class EditModeDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
