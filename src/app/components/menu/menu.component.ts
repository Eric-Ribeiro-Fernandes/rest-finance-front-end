import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';

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

  constructor(
    private routes: Router,
    private service: MenuService) {

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
    this.service.currentPath = 'dashboard';
  }
  goLancarOperacao(){
    this.routes.navigate(['lancar-operacao'])
    this.resetSelecionado();
    this.lancarOperacaoSelecionado = true;
    this.service.currentPath = 'lancar-operacao';
  }
  goExtratoOperacoes(){
    this.routes.navigate(['extrato-operacoes'])
    this.resetSelecionado();
    this.extratoOperacoesSelecionado = true;
    this.service.currentPath = 'extrato-operacoes';
  }
  moMonitoracao(){
    this.routes.navigate(['monitoracao'])
    this.resetSelecionado();
    this.monitoracaoSelecionado = true;
    this.service.currentPath = 'monitoracao';
  }
  goPesquiseTicker(){
    this.routes.navigate(['pesquise-ticker'])
    this.resetSelecionado();
    this.pesquiseTickerSelecionado = true;
    this.service.currentPath = 'pesquise-ticker';
  }
  goPrecoMedio(){
    this.routes.navigate(['preco-medio'])
    this.resetSelecionado();
    this.precoMedioSelecionado = true;
    this.service.currentPath = 'preco-medio';
  }


}
