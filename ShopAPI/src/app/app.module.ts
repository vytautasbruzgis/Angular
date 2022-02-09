import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopslistComponent } from './components/shopslist/shopslist.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopitemlistComponent } from './components/shopitemlist/shopitemlist.component';
import { ShopitemComponent } from './components/shopitem/shopitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopslistComponent,
    ShopComponent,
    ShopitemlistComponent,
    ShopitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
