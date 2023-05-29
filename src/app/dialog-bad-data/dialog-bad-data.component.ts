import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-bad-data',
  templateUrl: './dialog-bad-data.component.html',
  styleUrls: ['./dialog-bad-data.component.css']
})
export class DialogBadDataComponent {

  constructor(
    private dialog: MatDialog,
  ) {}

  close() {
    this.dialog.closeAll();
  }

}
