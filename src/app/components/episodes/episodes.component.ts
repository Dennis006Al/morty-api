import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CharacterService } from 'src/app/services/character.service';
import { Episodes } from '../interfaces/character.interface';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  episodes: Episodes[] = [];
  pageNum = 1;

  constructor(private characterSvc: CharacterService) {}

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes(): void {
    this.characterSvc
      .getEpisodes(this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        console.log('Episodes-->', res);
        const { results } = res;
        this.episodes = results;
      });
  }

  previousPage(): void {
    if (this.pageNum > 1) {
      this.pageNum--;
      this.getEpisodes();
    }
  }

  nextPage(): void {
    if (this.pageNum >= 3) {
      return;
    }
    this.pageNum++;
    this.getEpisodes();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  getId(character: string) {
    const id = character.split("/")[5];
    return id;
  }
}
