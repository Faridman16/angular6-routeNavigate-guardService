import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirm(message?): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it Ok?');

    return of(confirmation);
  }
}
