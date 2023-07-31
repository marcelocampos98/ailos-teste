import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  public menus = [
    {
      icon: '../../../../../assets/imgs/icone_pesquisa.svg',
      alt: 'Pesquisa',
    },
    {
      icon: '../../../../../assets/imgs/icone_estrela.svg',
      alt: 'Favoritos',
    },
    {
      icon: '../../../../../assets/imgs/icone_chat.svg',
      alt: 'Chat',
    },
    {
      icon: '../../../../../assets/imgs/icone_categorias.svg',
      alt: 'Relatórios',
    },
    {
      icon: '../../../../../assets/imgs/icone_central.svg',
      alt: 'Banco',
    },
  ];
}
