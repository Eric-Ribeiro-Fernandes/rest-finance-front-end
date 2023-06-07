
import { Component, Input, OnInit } from '@angular/core';
import { Informacoes } from 'src/app/models/informacoes';
import { PesquiseTickerService } from './pesquise-ticker.service';
import { PlotlyTemplate } from 'src/app/models/plotly-template';

@Component({
  selector: 'app-pesquise-ticker',
  templateUrl: './pesquise-ticker.component.html',
  styleUrls: ['./pesquise-ticker.component.css']
})

export class PesquiseTickerComponent implements OnInit {

  public respostaInformacoes: Informacoes = {};
  public respostaCotacaoAtivo?: PlotlyTemplate;

  public msgInfoSemTicker = {
    text: "Informe um ativo para ser buscado...",
    severity: 'info'
  }

  constructor(
    private service: PesquiseTickerService) { }

  ngOnInit(): void {


  }

  possuiDados(): boolean {
    if (this.respostaInformacoes.longName) {
      return true
    } else return false
  }

  // TODO: Arrumar função de timestamp
timestampToDate(timestamp: number | undefined): string  {
  if (timestamp) {
    const date= new Date(timestamp);
    

    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  } else return ""
}

  dados(): void {
    this.respostaInformacoes = this.service.respostaInformacoes;
    this.respostaCotacaoAtivo = this.service.respostaCotacaoAtivo;


  }




}
