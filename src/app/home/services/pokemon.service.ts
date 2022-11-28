import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from "../../../environment/environment";
import { ApiPokemon } from '../interfaces/api-pokemon.interface';
import { BehaviorSubject, delay, map, Observable, pipe, tap } from 'rxjs';
import { Pokemon, Ability } from '../interfaces/pokemon.interface';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _apiPokemon:BehaviorSubject<ApiPokemon | null>= new BehaviorSubject<ApiPokemon |null>(null);
  public apiPokemon$: Observable<ApiPokemon | null> = this._apiPokemon.asObservable();

  constructor(private _http: HttpClient) {}

  set apiPokemons(value: ApiPokemon | null) {
    this._apiPokemon.next(value);
  }

  getAll(offset:number): Observable<ApiPokemon | null>{
    this.apiPokemons=null;
    return this._http.get<ApiPokemon | null>(`${base_url}pokemon?limit=12&offset=${offset}`).pipe(
      tap((result:ApiPokemon | null)=>{
        this.apiPokemons=result;
      })
    )
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
