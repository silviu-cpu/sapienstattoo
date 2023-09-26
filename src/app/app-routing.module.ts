import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TatuajeMiciComponent } from './tatuaje-mici/tatuaje-mici.component';
import { TatuajeMariComponent } from './tatuaje-mari/tatuaje-mari.component';
import { TatuajeMediiComponent } from './tatuaje-medii/tatuaje-medii.component';
import { BlackAndGrayComponent } from './black-and-gray/black-and-gray.component';
import { ColorComponent } from './color/color.component';
import { FeteComponent } from './fete/fete.component';
import { BaietiComponent } from './baieti/baieti.component';
import { PortretComponent } from './portret/portret.component';
import { GeometriceComponent } from './geometrice/geometrice.component';
import { LiniareComponent } from './liniare/liniare.component';
import { CustomComponent } from './custom/custom.component';
import { SketchComponent } from './sketch/sketch.component';
import { AnimaleComponent } from './animale/animale.component';
import { AnimeCartoonComponent } from './anime-cartoon/anime-cartoon.component';
import { MatchComponent } from './match/match.component';
import { ScrisComponent } from './scris/scris.component';
import { PiercingComponent } from './piercing/piercing.component';
import { ContactComponent } from './contact/contact.component';
import { EchipaComponent } from './echipa/echipa.component';
import { ToateCategoriileComponent } from './toate-categoriile/toate-categoriile.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: 'Sapiens Tattoo'
    }
  },
  {
    path: 'tatuaje-mici',
    pathMatch: 'full',
    component: TatuajeMiciComponent,
    data: {
      title: 'Tatuaje mici | Sapiens Tattoo'
    }
  },
  {
    path: 'tatuaje-mari',
    pathMatch: 'full',
    component: TatuajeMariComponent,
    data: {
      title: 'Tatuaje mari | Sapiens Tattoo'
    }
  },
  {
    path: 'tatuaje-medii',
    pathMatch: 'full',
    component: TatuajeMediiComponent,
    data: {
      title: 'Tatuaje medii | Sapiens Tattoo'
    }
  },
  {
    path: 'black-and-gray',
    pathMatch: 'full',
    component: BlackAndGrayComponent,
    data: {
      title: 'Tatuaje black and gray | Sapiens Tattoo'
    }
  },
  {
    path: 'color',
    pathMatch: 'full',
    component: ColorComponent,
    data: {
      title: 'Tatuaje color | Sapiens Tattoo'
    }
  },
  {
    path: 'tatuaje-medii',
    pathMatch: 'full',
    component: TatuajeMediiComponent,
    data: {
      title: 'Tatuaje medii | Sapiens Tattoo'
    }
  },
  {
    path: 'fete',
    pathMatch: 'full',
    component: FeteComponent,
    data: {
      title: 'Tatuaje fete | Sapiens Tattoo'
    }
  },
  {
    path: 'baieti',
    pathMatch: 'full',
    component: BaietiComponent,
    data: {
      title: 'Tatuaje baieti | Sapiens Tattoo'
    }
  },
  {
    path: 'portret',
    pathMatch: 'full',
    component: PortretComponent,
    data: {
      title: 'Tatuaje portret | Sapiens Tattoo'
    }
  },
  {
    path: 'geometrice',
    pathMatch: 'full',
    component: GeometriceComponent,
    data: {
      title: 'Tatuaje geometrice | Sapiens Tattoo'
    }
  },
  {
    path: 'liniare',
    pathMatch: 'full',
    component: LiniareComponent,
    data: {
      title: 'Tatuaje liniare | Sapiens Tattoo'
    }
  },
  {
    path: 'custom',
    pathMatch: 'full',
    component: CustomComponent,
    data: {
      title: 'Tatuaje custom | Sapiens Tattoo'
    }
  },
  {
    path: 'sketch',
    pathMatch: 'full',
    component: SketchComponent,
    data: {
      title: 'Tatuaje sketch | Sapiens Tattoo'
    }
  },
  {
    path: 'animale',
    pathMatch: 'full',
    component: AnimaleComponent,
    data: {
      title: 'Tatuaje animale | Sapiens Tattoo'
    }
  },
  {
    path: 'anime-cartoon',
    pathMatch: 'full',
    component: AnimeCartoonComponent,
    data: {
      title: 'Tatuaje anime-cartoon | Sapiens Tattoo'
    }
  },
  {
    path: 'match',
    pathMatch: 'full',
    component: MatchComponent,
    data: {
      title: 'Match Tattoos | Sapiens Tattoo'
    }
  },
  {
    path: 'scris',
    pathMatch: 'full',
    component: ScrisComponent,
    data: {
      title: 'Tatuaje scris | Sapiens Tattoo'
    }
  },
  {
    path: 'piercing',
    pathMatch: 'full',
    component: PiercingComponent,
    data: {
      title: 'Piercing | Sapiens Tattoo'
    }
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
    data: {
      title: 'Contact | Sapiens Tattoo'
    }
  },
  {
    path: 'echipa',
    pathMatch: 'full',
    component: EchipaComponent,
    data: {
      title: 'Echipa | Sapiens Tattoo'
    }
  },
  {
    path: 'toate-categoriile',
    pathMatch: 'full',
    component: ToateCategoriileComponent,
    data: {
      title: 'Categorii | Sapiens Tattoo'
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
