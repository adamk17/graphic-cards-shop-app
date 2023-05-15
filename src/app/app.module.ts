import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { CartComponent } from './cart/cart.component';
import { AdressFieldComponent } from './adress-field/adress-field.component';
import { InPostEasyPackComponent } from './in-post-easy-pack/in-post-easy-pack.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CardsListComponent,
    CardsDetailsComponent,
    CartComponent,
    AdressFieldComponent,
    InPostEasyPackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CardsListComponent },
      { path: 'cards/:cardId', component: CardsDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'adress', component: AdressFieldComponent,}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
