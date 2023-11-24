import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-lancar-operacao',
  templateUrl: './lancar-operacao.component.html',
  styleUrls: ['./lancar-operacao.component.css'],
})
export class LancarOperacaoComponent implements OnInit {
  isCompra = true;
  isVenda = false;

  activateMenu?: MenuItem;

  items: MenuItem[] = [
    {
      label: 'Comprar',
      icon: 'pi pi-fw pi-arrow-down-left',

      command: (click) => {
        this.isCompra = true;
        this.isVenda = false;
      },
    },

    {
      label: 'Vender',
      icon: 'pi pi-fw pi-arrow-up-right',
      command: (click) => {
        this.isCompra = false;
        this.isVenda = true;
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.activateMenu = this.items[0];
  }
}
