import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-label',
  template: `
    <input
      #inputSearch
      autofocus
      type="text"
      class="search-label"
      placeholder="Search Something..."
      (keyup)="onSearch(inputSearch.value)"
    />
    <button mat-raised-button class="btn-search">
      <mat-icon>search</mat-icon>
    </button>
  `,
  styleUrls: ['./search-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLabelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    console.log('Busqueda -->', value);

    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}
