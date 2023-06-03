import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from 'src/app/components/cabecalho/cabecalho.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { RodapeComponent } from 'src/app/components/rodape/rodape.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CabecalhoComponent,
    MainComponent,
    RodapeComponent,
    MenuComponent
  ]
})
export class HomeModule { }
