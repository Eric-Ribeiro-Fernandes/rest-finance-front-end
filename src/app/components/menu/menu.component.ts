import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  extratoOperacoesSelecionado = false
  lancarOperacaoSelecionado = false
  monitoracaoSelecionado = false
  pesquiseTickerSelecionado = false
  precoMedioSelecionado = false
  dashboardSelecionado = true

  constructor(private routes: Router) {

   }

  ngOnInit(): void {
  }
  
  isSelecionado(selecionado:boolean):string{
    if (selecionado){
      return "background-color: whitesmoke; scale: 1.1; border-right: 8px solid seagreen; font-weight: bold;"
    } else return "";
  }

  resetSelecionado():void {
    this.extratoOperacoesSelecionado = false
    this.lancarOperacaoSelecionado = false
    this.monitoracaoSelecionado = false
    this.pesquiseTickerSelecionado = false
    this.precoMedioSelecionado = false
    this.dashboardSelecionado = false
  }





  goDashboard(){
    this.routes.navigate(['dashboard']);
    this.resetSelecionado();
    this.dashboardSelecionado = true;
  }
  goLancarOperacao(){
    this.routes.navigate(['lancar-operacao'])
    this.resetSelecionado();
    this.lancarOperacaoSelecionado = true;
  }
  goExtratoOperacoes(){
    this.routes.navigate(['extrato-operacoes'])
    this.resetSelecionado();
    this.extratoOperacoesSelecionado = true;
  }
  moMonitoracao(){
    this.routes.navigate(['monitoracao'])
    this.resetSelecionado();
    this.monitoracaoSelecionado = true;
  }
  goPesquiseTicker(){
    this.routes.navigate(['pesquise-ticker'])
    this.resetSelecionado();
    this.pesquiseTickerSelecionado = true;
  }
  goPrecoMedio(){
    this.routes.navigate(['preco-medio'])
    this.resetSelecionado();
    this.precoMedioSelecionado = true;
  }


}
