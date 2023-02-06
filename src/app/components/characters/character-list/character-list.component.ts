import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../interfaces/character.interface';
type RequestInfo = {
  next: any;
};
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];

  info: RequestInfo = {
    next: null,
  };

  private pageNum = 1;
  private query!: string;
  constructor(
    private characterSvc: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['q'];
      this.getDataFromService();
    });
  }

  private filterCharacters() {
    if (!this.query) {
      this.filteredCharacters = [...this.characters];
      return;
    }

    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  private getDataFromService(): void {
    this.characterSvc
      .searchCharacter(this.query, 1)
      .pipe(take(1))
      .subscribe((res: any) => {
        const { info, results } = res;
        this.characters = results;
        this.info = info;
        this.filterCharacters();
      });
  }
}
