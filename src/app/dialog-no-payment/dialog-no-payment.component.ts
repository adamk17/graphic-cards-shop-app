import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-no-payment',
  templateUrl: './dialog-no-payment.component.html',
  styleUrls: ['./dialog-no-payment.component.css']
})
export class DialogNoPaymentComponent {

  constructor(
    private dialog: MatDialog,
  ) {}

  close() {
    this.dialog.closeAll();
  }
}
