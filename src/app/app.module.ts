import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
