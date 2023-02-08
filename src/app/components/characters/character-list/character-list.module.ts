import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BtnUpComponent } from '../../btn-up/btn-up.component';

const routes: Routes = [{ path: '', component: CharacterListComponent }];

@NgModule({
  declarations: [CharacterListComponent, BtnUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
  ],
  exports: [CharacterListComponent, BtnUpComponent],
  providers: [],
})
export class CharacterListModule {}
