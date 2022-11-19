import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from "../../../environment/environment";
import { ApiPokemon } from '../interfaces/api-pokemon.interface';
import { map, Observable, pipe, tap } from 'rxjs';
import { Pokemon, Ability } from '../interfaces/pokemon.interface';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private _http: HttpClient) { }

  getAll(offset:number): Observable<ApiPokemon>{
    return this._http.get<ApiPokemon>(`${base_url}pokemon?offset=${offset}`);
  }
  getName(name:string): Observable<Pokemon>{
    return this._http.get<Pokemon>(`${base_url}pokemon/${name}`).pipe(
      map((pokemon:Pokemon):Pokemon=>{
        pokemon.abilities_string=this.transfomAbilities(pokemon.abilities);
        return pokemon;
      }),
    )
  }
  transfomAbilities(abilities:Ability[]): string[]{
    const abilitiesString:string[]=[];
    abilities.forEach(ability=>{
      abilitiesString.push(ability.ability.name)
    });
    return abilitiesString;
  }
}
