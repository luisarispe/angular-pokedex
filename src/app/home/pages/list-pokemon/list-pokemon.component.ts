import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonService } from '../../services/pokemon.service';

import { Result, ApiPokemon } from '../../interfaces/api-pokemon.interface';
import { WidthSkeleton } from '../../interfaces/width-skeleton.interface';

import {data} from '../../../core/data/width-skeleton';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit{
  countSkeleton=0;
  listPokemon:Result[]=[];
  apiPokemons$:Observable<ApiPokemon| null>= new Observable();
  widthsSkeleton:WidthSkeleton[]=data;

  constructor(private _pokemonService: PokemonService){
    this.getAll();
    this.apiPokemons$=this._pokemonService.apiPokemon$;
  }
  ngOnInit(): void {
    this.changeLineSckeleton(window.innerWidth);
  }

  getAll(){
    this._pokemonService.getAll(0).subscribe()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    this.changeLineSckeleton(window.innerWidth);
  }
  
  changeLineSckeleton(width:number){
    const widthSkeleton= this.widthsSkeleton.find(element=> width<=element.width);
    this.countSkeleton=widthSkeleton!.countSkeleton;
  }
}
