import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CharacterDetailComponent }];

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CharacterDetailComponent],
  providers: [],
})
export class CharacterDetailModule {}
