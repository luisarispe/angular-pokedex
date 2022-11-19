import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Result, ApiPokemon } from '../../interfaces/api-pokemon.interface';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {
  public listPokemon:Result[]=[];
  constructor(private _pokemonService: PokemonService){
    this.getAll();
  }

  getAll(){
    this._pokemonService.getAll(0).subscribe({
      next:(resp:ApiPokemon)=>{
        this.listPokemon=resp.results;
      },
      error:(error)=>{
        this.listPokemon=[];
      }
    })
  }
}
