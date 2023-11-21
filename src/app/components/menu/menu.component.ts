import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MenuService } from '../../services/menu.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Minha área',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'Lançar operação de compra/venda',
          icon: 'pi pi-fw pi-plus',
          routerLink: 'lancar-operacao',
        },
      ],
    },
    {
      label: 'Pesquise um ticker',
      icon: 'pi pi-fw pi-search',
      routerLink: 'pesquise-ticker',
    },
  ];
  constructor(private routes: Router) {}

  ngOnInit(): void {}
}
