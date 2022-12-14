import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialCdkModule } from '../material-cdk/material-cdk.module';


const declarables= [HeaderComponent, FooterComponent]
@NgModule({
  declarations: [declarables],
  imports: [
    CommonModule,
    MaterialCdkModule
  ],
  exports:[declarables]
})
export class SharedModule { }
