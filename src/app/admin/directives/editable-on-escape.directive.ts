import { Directive, HostListener } from '@angular/core';
import { EditableComponent } from '../components/editable/editable.component';

@Directive({
  selector: '[appEditableOnEscape]'
})
export class EditableOnEscapeDirective {

  constructor(private editable: EditableComponent) {
  }

  @HostListener('keyup.escape')
  onEnter() {
    this.editable.toViewModeExit();
  }
}
