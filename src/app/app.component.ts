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
            label: 'Categorii Tatuaje',
            items: [
                {
                    label: 'Tatuaje Mici',
                    routerLink: "home"
                },
                {
                    label: 'Tatuaje Mari',
                },
                {
                    label: 'Tatuaje Medii',
                },
                {
                    separator: true
                },
                {
                    label: 'Tatuaje Black And Gray',
                },
                {
                    label: 'Tatuaje Color',
                },
                {
                    separator: true
                },
                {
                    label: 'Tatuaje Fete',
                },
                {
                    label: 'Tatuaje Baieti',
                },
                {
                    separator: true
                },
                {
                    label: 'Tatuaje Portret',
                },
                {
                    label: 'Tatuaje Geometrice',
                },
                {
                    label: 'Tatuaje Liniare',
                },
                {
                    separator: true
                }, 
                {
                    label: 'Tatuaje Custom',
                },
                {
                    label: 'Tatuaje Sketch',
                },
                {
                    separator: true
                },
                {
                    label: 'Tatuaje Animale',
                },
                {
                    label: 'Tatuaje Anime Cartoon',
                },
                {
                    separator: true
                },
                {
                    label: 'Match Tattoos',
                },
                {
                    label: 'Tatuaje scris',
                }
            ]
        },
        {
            label: 'Piercing',
        },
        {
            label: 'Echipa',
        },
        {
            label: 'Contact',
        }, 
        {
            label: 'Blog',
            icon: 'pi pi-fw pi-user',
            disabled: true,
            tooltip: 'Coming Soon'
        },
    ];
}
}
