import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits : string []; // tableau de chaine de caractères
  constructor() { 
    this.produits = ["Asus","Hp","Apple","Samsung"]
  }

  ngOnInit(): void {
  }

}
