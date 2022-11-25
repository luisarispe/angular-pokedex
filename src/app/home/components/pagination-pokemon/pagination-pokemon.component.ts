import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pagination-pokemon',
  templateUrl: './pagination-pokemon.component.html',
  styleUrls: ['./pagination-pokemon.component.css']
})
export class PaginationPokemonComponent {
  windowScrolled:boolean=false;
  constructor(private _pokemonService: PokemonService){}


  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (document.documentElement.scrollTop>300) {
      this.windowScrolled = true;
    }else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
}
