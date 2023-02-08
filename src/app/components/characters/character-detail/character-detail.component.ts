import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../interfaces/character.interface';
import { Location
 } from '@angular/common';
@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailComponent implements OnInit {
  character$!: Observable<Character>;

  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  goBack(): void {
    this.route.queryParams.subscribe((params) => {
      const pageNum = +params['page'] || 1;
      this.router.navigate(['/character-list'], { queryParams: { page: pageNum } });
    });
  }
}
