import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './episodes.component';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: EpisodesComponent }];
@NgModule({
  declarations: [EpisodesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [],
})
export class EpisodesModule {}
