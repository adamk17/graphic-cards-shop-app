import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-add-to-cart',
  templateUrl: './dialog-add-to-cart.component.html',
  styleUrls: ['./dialog-add-to-cart.component.css']
})
export class DialogAddToCartComponent {
  constructor(
    private dialog: MatDialog,
    public router: Router
  ) {}


  close() {
    this.dialog.closeAll();
  }

  goToCart() {
    this.dialog.closeAll();
    this.router.navigate(["/cart"]);
  }
}
