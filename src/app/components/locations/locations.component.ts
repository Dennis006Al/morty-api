import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CharacterService } from 'src/app/services/character.service';
import { Locations } from '../interfaces/character.interface';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations: Locations[] = [];
  pageNum = 1;

  constructor(private characterSvc: CharacterService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.characterSvc
      .getLocations(this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        console.log('Response-->', res);
        const { results } = res;
        this.locations = results;
      });
  }

  previousPage(): void {
    if (this.pageNum > 1) {
      this.pageNum--;
      this.getLocations();
    }
  }

  nextPage(): void {
    if (this.pageNum >= 7) {
      return;
    }
    this.pageNum++;
    this.getLocations();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
