import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sapiens';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label:'Home',
            routerLink: "home"
        },
        {
            label: 'Categorii Tatuaje',
            items: [
                {
                    label: 'Tatuaje Mici',
                    routerLink: "tatuaje-mici"
                },
                {
                    label: 'Tatuaje Mari',
                    routerLink: "tatuaje-mari"
                },
                {
                    label: 'Tatuaje Medii',
                    routerLink: "tatuaje-medii"
                },
                {
                    separator: true
                },
                {
                    label: 'Tatuaje Black And Gray',
                    routerLink: "black-and-gray"
                },
                {
                    label: 'Tatuaje Color',
                    routerLink: "color"
                },
                {
                    separator: true
                },
                {
                    label: 'Tatuaje Fete',
                    routerLink: "fete"
                },
                {
                    label: 'Tatuaje Baieti',
                    routerLink: "baieti"
                },
                {
                    separator: true
                },
                {
                    label: 'Tatuaje Portret',
                    routerLink: "portret"
                },
                {
                    label: 'Tatuaje Geometrice',
                    routerLink: "geometrice"
                },
                {
                    label: 'Tatuaje Liniare',
                    routerLink: "liniare"
                },
                {
                    separator: true
                }, 
                {
                    label: 'Tatuaje Custom',
                    routerLink: "custom"
                },
                {
                    label: 'Tatuaje Sketch',
                    routerLink: "sketch"
                },
                {
                    separator: true
                },
                {
                    label: 'Tatuaje Animale',
                    routerLink: "animale"
                },
                {
                    label: 'Tatuaje Anime Cartoon',
                    routerLink: "anime-cartoon"
                },
                {
                    separator: true
                },
                {
                    label: 'Match Tattoos',
                    routerLink: "match"
                },
                {
                    label: 'Tatuaje Scris',
                    routerLink: "scris"
                }
            ]
        },
        {
            label: 'Piercing',
            routerLink: "piercing"
        },
        {
            label: 'Echipa',
            routerLink: "echipa"
        },
        {
            label: 'Contact',
            routerLink: "contact"
        }, 
        {
            label: 'Blog - Coming Soon',
            disabled: true,
        },
    ];
}
}
