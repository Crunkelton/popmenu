import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SureCheckComponent } from './sure-check.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    SureCheckComponent
  ],
  exports: [
    SureCheckComponent
  ],
  entryComponents: [
    SureCheckComponent
  ]
})
export class SureCheckModule {
}
