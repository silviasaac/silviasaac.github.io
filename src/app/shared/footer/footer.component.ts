import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu.interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  photoList: string[] = [
    'pic10.jpg',
    'pic10.jpg',
    'pic10.jpg',
    'pic10.jpg',
    'pic10.jpg',
    'pic10.jpg',
  ];

  @Input() photos: boolean = false;

  socialNetworks: any[] = [
    {
      icon: 'fa-facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com'
    },
    {
      icon: 'fa-instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com'
    },
    {
      icon: 'fa-pinterest',
      label: 'Pinterest',
      url: 'https://www.pinterest.com'
    },
    {
      icon: 'fa-linkedin',
      label: 'Linkedin',
      url: 'https://www.linkedin.com'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
