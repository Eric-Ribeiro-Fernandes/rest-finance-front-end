import { Component, Input, OnInit } from '@angular/core';
import { Informacoes } from 'src/app/models/informacoes';
import { ApiFinanceService } from 'src/app/services/api-finance.service';
import { PlotlyTemplate } from 'src/app/models/plotly-template';

@Component({
  selector: 'app-pesquise-ticker',
  templateUrl: './pesquise-ticker.component.html',
  styleUrls: ['./pesquise-ticker.component.css'],
})
export class PesquiseTickerComponent implements OnInit {
  public respostaInformacoes: Informacoes = {};
  public respostaCotacaoAtivo?: PlotlyTemplate;

  public msgInfoSemTicker = {
    text: 'Informe um ativo para ser buscado...',
    severity: 'info',
  };

  constructor(private service: ApiFinanceService) {}

  ngOnInit(): void {}

  public possuiDados(): boolean {
    if (this.respostaInformacoes.longName) {
      return true;
    } else return false;
  }

  public variacaoDia() {
    const precoAtual = this.respostaInformacoes.currentPrice;
    const precoUltimoFechamento = this.respostaInformacoes.previousClose;

    if (precoAtual && precoUltimoFechamento) {
      const variacao =
        ((precoAtual - precoUltimoFechamento) / precoUltimoFechamento) * 100;

      if (variacao > 0) {
        return `+ ${(precoAtual - precoUltimoFechamento).toFixed(
          2
        )} (${variacao.toFixed(2)}%) ↑`;
      } else
        return ` ${(precoAtual - precoUltimoFechamento).toFixed(
          2
        )} (${variacao.toFixed(2)}%) ↓`;
    } else return '';
  }

  public classeVariacao() {
    const precoAtual = this.respostaInformacoes.currentPrice;
    const precoUltimoFechamento = this.respostaInformacoes.previousClose;

    if (precoAtual && precoUltimoFechamento) {
      if (precoAtual - precoUltimoFechamento > 0) {
        return true;
      } else return false;
    } else return '';
  }

  public dados(): void {
    this.respostaInformacoes = this.service.respostaInformacoes;
    this.respostaCotacaoAtivo = this.service.respostaCotacaoAtivo;
  }
}
