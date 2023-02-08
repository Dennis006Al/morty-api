import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  showBtnUp = false;
  showBtn = false;
  error = false;
  info: RequestInfo = {
    next: null,
  };

  pageNum = 1;
  query!: string;
  constructor(
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 250) {
      this.showBtnUp = true;
    } else {
      this.showBtnUp = false;
    }
    if (window.pageYOffset >= 2400) {
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['q'];
      this.pageNum = +params['page'] || 1;
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
      .searchCharacter(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe(
        (res: any) => {
          console.log('Info-->', res);

          const { info, results } = res;
          this.characters = results;
          this.info = info;
          this.filterCharacters();
        },
        (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.characters = [];
            this.filteredCharacters = [];
          }
        }
      );
  }

  previousPage(): void {
    if (this.pageNum > 1) {
      this.pageNum--;
      this.getDataFromService();
    }
  }

  nextPage(): void {
    this.pageNum++;
    this.getDataFromService();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  goToCharacterDetail(character: Character): void {
    this.router.navigate(['/character-detail', character.id], { queryParams: { page: this.pageNum } });
  }
}
