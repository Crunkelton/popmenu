import { Component, ContentChild, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { EditModeDirective } from '../../directives/edit-mode.directive';
import { ViewModeDirective } from '../../directives/view-mode.directive';
import { fromEvent, Subject } from 'rxjs';
import { filter, switchMapTo, take } from 'rxjs/operators';

/**
 * Controls the view state for inline editing. Switches between view and edit templates. Emits an update() event to signal a change/update.
 */
@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.sass']
})
export class EditableComponent implements OnInit {
  @Output() update = new EventEmitter();
  @ContentChild(ViewModeDirective) viewModeTpl: ViewModeDirective;
  @ContentChild(EditModeDirective) editModeTpl: EditModeDirective;

  editMode = new Subject();
  editMode$ = this.editMode.asObservable();

  mode: 'view' | 'edit' = 'view';

  constructor(private host: ElementRef) {
  }

  get currentView() {
    return this.mode === 'view' ? this.viewModeTpl.tpl : this.editModeTpl.tpl;
  }

  ngOnInit() {
    this.viewModeHandler();
    // this.editModeHandler();
  }

  private get element() {
    return this.host.nativeElement;
  }

  /**
   * Registers a double click event watcher on the view state template. When double clicked this will switch the the mode from view to edit.
   * this will hide the view state template and then show the edit state template.
   */
  private viewModeHandler() {
    fromEvent(this.element, 'dblclick').pipe().subscribe(() => {
      this.mode = 'edit';
      this.editMode.next(true);
    });
  }

  /**
   * Registers a watcher for a click event outside the edit mode template. If detected it switches the mode to view mode and away from edit mode.
   * It then fires the update event emitter so anyone listening to that event can get the updated value to do something with it.
   */
  private editModeHandler() {
    const clickOutside$ = fromEvent(document, 'click').pipe(
      filter(({ target }) => this.element.contains(target) === false),
      take(1)
    );

    this.editMode$.pipe(
      switchMapTo(clickOutside$)
    ).subscribe(() => {
      this.update.next();
      this.mode = 'view';
    });
  }

  /**
   * Used by the on enter directive to switch from edit to view mode and send out an update event for any components listening.
   */
  toViewMode() {
    this.update.next();
    this.mode = 'view';
  }

  toViewModeExit() {
    this.mode = 'view';
  }
}
