import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-btn-up',
  template: `
    <div class="btn-container">
      <button mat-raised-button class="btn-up" (click)="scrollToTop()">
        <mat-icon>keyboard_arrow_up</mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
      .btn-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
      }

      .btn-up {
        font-family: 'rick';
        font-size: 24px;
        font-weight: 900;
        padding: 8px;
        &:hover {
          background-color: rgb(255, 152, 0);
          color: black;
        }
      }

      .btn-up:hover .mat-icon {
        color: black;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnUpComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
