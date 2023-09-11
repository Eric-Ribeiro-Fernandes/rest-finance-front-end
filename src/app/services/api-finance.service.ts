import { Injectable, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SetoresTickers } from 'src/app/models/setores-tickers';
import { Informacoes } from 'src/app/models/informacoes';
import { Cotacao } from 'src/app/models/cotacao';
import { PlotlyTemplate } from 'src/app/models/plotly-template';
import { Dividendos } from '../models/dividendos';

@Injectable({
  providedIn: 'root',
})
export class ApiFinanceService {
  private readonly API = 'http://localhost:5000/';

  public ticker = '';
  public respostaInformacoes?: Informacoes;
  public respostaCandle?: PlotlyTemplate;
  public respostaCotacaoBovespa?: Cotacao;
  public respostaCotacaoAtivoDia?: Cotacao;
  public respostaDividendos?: Dividendos;

  constructor(private http: HttpClient) {}

  getTickers(): Observable<SetoresTickers> {
    return this.http.get<SetoresTickers>(this.API + 'tickers');
  }

  getInfo(tickerASerBuscado: string): Observable<Informacoes> {
    return this.http.get<Informacoes>(this.API + tickerASerBuscado);
  }

  getCotacao(tickerASerBuscado: string): Observable<PlotlyTemplate> {
    return this.http.get<PlotlyTemplate>(
      this.API + tickerASerBuscado + '/cotacao'
    );
  }

  getCotacaoDia(tickerASerBuscado: string): Observable<Cotacao> {
    return this.http.get<Cotacao>(this.API + tickerASerBuscado + '/dia');
  }

  getCotacaoBovespa(): Observable<Cotacao> {
    return this.http.get<Cotacao>(this.API + '/bovespa');
  }

  getDividendos(tickerASerBuscado: string): Observable<Dividendos> {
    return this.http.get<Dividendos>(
      this.API + tickerASerBuscado + '/dividendos'
    );
  }
}
