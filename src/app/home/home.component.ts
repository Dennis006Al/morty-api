import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCharacterList(): void {
    this.router.navigate(['/character-list']);
  }

  goToLocationList(): void {
    this.router.navigate(['/locations']);
  }

  goToEpisodeList(): void {
    this.router.navigate(['/episodes']);
  }
}
