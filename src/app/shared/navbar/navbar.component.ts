import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../interfaces/menu.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  homePage: boolean = false;

  menutempalte: MenuItem[] = [
    {
      texto: 'Home',
      ruta: ''
    },
    {
      texto: 'About Me',
      ruta: 'about'
    },
    {
      texto: 'Contact',
      ruta: 'contact'
    }
  ];
  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.url
      .subscribe( url => console.log(url))
  }

}
