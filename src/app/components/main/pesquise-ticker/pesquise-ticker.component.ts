import { Component, Input, OnInit } from '@angular/core';
import { Informacoes } from 'src/app/models/informacoes';
import { ApiFinanceService } from 'src/app/services/api-finance.service';
import { PlotlyTemplate } from 'src/app/models/plotly-template';
import { Cotacao } from 'src/app/models/cotacao';
import { Dividendos } from 'src/app/models/dividendos';
import { json } from 'd3';

@Component({
  selector: 'app-pesquise-ticker',
  templateUrl: './pesquise-ticker.component.html',
  styleUrls: ['./pesquise-ticker.component.css'],
})
export class PesquiseTickerComponent implements OnInit {
  ngOnInit(): void {}
}
