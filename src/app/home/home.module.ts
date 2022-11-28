import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialCdkModule } from '../material-cdk/material-cdk.module';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { PaginationPokemonComponent } from './components/pagination-pokemon/pagination-pokemon.component';



@NgModule({
  declarations: [
    ListPokemonComponent,
    CardPokemonComponent,
    PaginationPokemonComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialCdkModule
  ]
})
export class HomeModule { }
