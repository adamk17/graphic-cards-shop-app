import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-ordered',
  templateUrl: './dialog-ordered.component.html',
  styleUrls: ['./dialog-ordered.component.css']
})
export class DialogOrderedComponent {

  constructor(
    private dialog: MatDialog,
    private cartService: CartService,
    public router: Router
  ) {}

  close() {
    this.dialog.closeAll();
    this.cartService.clearCart();
    this.router.navigate(["/cart"]);
  }
}
