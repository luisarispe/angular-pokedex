import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit, OnDestroy{
  @Input('name') name:string='';
  @Input('url') url:string='';
  pokemon$: Observable<Pokemon>= new Observable();
  constructor(private _pokemonService: PokemonService){}
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    this.pokemon$=this._pokemonService.getName(this.name);
  }
}
