import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public menu: any;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = (event.urlAfterRedirects) ? event.urlAfterRedirects : event.url;
        this.setActive(url);
      }
    });
  }

  ngOnInit() {
    this.menu = [
      {
        label: 'Accueil',
        url: '/',
        active: true,
        icon: 'home'
      },
      {
        label: 'Nos pilotes',
        url: '/pilotes',
        active: false,
        icon: 'account_circle'
      },
      {
        label: 'Classement',
        url: '/classement',
        active: false,
        icon: 'list'
      },
      {
        label: 'Palmares',
        url: '/palmares',
        active: false,
        icon: 'star'
      }
    ];
  }

  setActive(url: string) {
    this.menu.forEach((item: any) => {
      item.active = false;
      if (url === '/' && item.url === '/') {
        item.active = true;
      } else if (item.url !== '/' && url.startsWith(item.url)) {
        item.active = true;
      }
    });
  }
}
