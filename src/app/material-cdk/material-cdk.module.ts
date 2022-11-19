import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const declarables=[MatToolbarModule,MatButtonModule,MatIconModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    declarables
  ],
  exports:[declarables]
})
export class MaterialCdkModule { }
