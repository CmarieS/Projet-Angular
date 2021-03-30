import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {
  produits: Produit[]; // tableau de chaine de caractères

  constructor(private produitService: ProduitService, private router: Router){
    //this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(prods =>{
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit)
  {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?")
    if (conf)
    {
      this.produitService.supprimerProduit(p.idProduit).subscribe(()=>{
        this.supprimerProduitDuTableau(p);
      });
    }
  }
  supprimerProduitDuTableau(prod : Produit)
  {
    this.produits.forEach((cur, index) =>{
      if(prod.idProduit === cur.idProduit)
      {
        this.produits.splice(index,1);
      }
    })
  }

}
