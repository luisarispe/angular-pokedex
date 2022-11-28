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
  offset:number=0;
  
  constructor(private _pokemonService: PokemonService){}


  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (document.documentElement.scrollTop>100) {
      this.windowScrolled = true;
    }else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  
  changeOffset(type:string):void{

    if(type==='left'){
      this.offset===0? this.offset=0: this.offset-=12;
    }else if(type==='right'){
      this.offset+=12;
    }
    this._pokemonService.getAll(this.offset).subscribe();
    window.scrollTo({top:0, behavior:'smooth'})
  }

}
