import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sure-check',
  templateUrl: './sure-check.component.html'
})
export class SureCheckComponent implements OnInit {
  message = 'Are you sure you want to perform this action?';
  yesText = 'Yes';
  noText = 'No';
  headerText = 'Are you sure?';

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    if (this.data != null) {
      this.message = this.data.message;
      this.yesText = this.data.yesText != null ? this.data.yesText : this.yesText;
      this.noText = this.data.noText != null ? this.data.noText : this.noText;
      this.headerText = this.data.headerText != null ? this.data.headerText : this.headerText;
    }
  }

  yes(): void {
    this.dialogRef.close(true);
  }

  no(): void {
    this.dialogRef.close(false);
  }
}
