import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new Subject<string>();
  searchValue$ = this.searchSubject.asObservable();

  updateSearchValue(value: string) {
    this.searchSubject.next(value);
  }
}
