import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { CartComponent } from './cart/cart.component';
import { AdressFieldComponent } from './adress-field/adress-field.component';
import { InPostEasyPackComponent } from './in-post-easy-pack/in-post-easy-pack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAddToCartComponent } from './dialog-add-to-cart/dialog-add-to-cart.component';
import { DialogBadDataComponent } from './dialog-bad-data/dialog-bad-data.component';
import { DialogNoPaymentComponent } from './dialog-no-payment/dialog-no-payment.component';
import { DialogOrderedComponent } from './dialog-ordered/dialog-ordered.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CardsListComponent,
    CardsDetailsComponent,
    CartComponent,
    AdressFieldComponent,
    InPostEasyPackComponent,
    DialogAddToCartComponent,
    DialogBadDataComponent,
    DialogNoPaymentComponent,
    DialogOrderedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: CardsListComponent },
      { path: 'cards/:cardId', component: CardsDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'adress', component: AdressFieldComponent,}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
