import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SetoresTickers } from 'src/app/models/setores-tickers';
import { PesquiseTickerService } from './pesquise-ticker.service';


@Component({
  selector: 'app-pesquise-ticker',
  templateUrl: './pesquise-ticker.component.html',
  styleUrls: ['./pesquise-ticker.component.css']
})
export class PesquiseTickerComponent implements OnInit {
  private tickers: SetoresTickers = {
    bensIndustriais: [],
    consumoCiclico: [],
    consumoNaoCiclico: [],
    financeiro: [],
    materiaisBasicos: [],
    outros: [],
    petroleoGaseBiocombustveis: [],
    saude: [],
    tecnologiaDaInformao: [],
    telecomunicacoes: [],
    utilidadePublica: [],

  }

  constructor(
    private service: PesquiseTickerService) { }

  ngOnInit(): void {

    this.service.getTickers()
      .subscribe({
        next:
          (dados) => {
            this.tickers = dados;
          },
        error:
          (erro: HttpErrorResponse) => {
            alert(erro.message)
          }
      });

  }





}
