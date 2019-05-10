import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { HomeComponent } from './home/home.component';
import { ProductSearchService } from './services/ProductSearchService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
