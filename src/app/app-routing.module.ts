import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'character-list',
    loadChildren: () =>
      import(
        './components/characters/character-list/character-list.module'
      ).then((m) => m.CharacterListModule),
  },
  {
    path: 'character-detail/:id',
    loadChildren: () =>
      import(
        './components/characters/character-detail/character-detail.module'
      ).then((m) => m.CharacterDetailModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./components/locations/locations.module').then(
        (m) => m.LocationsModule
      ),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./components/episodes/episodes.module').then(
        (m) => m.EpisodesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
