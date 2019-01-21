import { Injectable } from '@angular/core';
import { CrisisService } from '../crisis/crisis.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY, never, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService {

  constructor(
    private crisisService: CrisisService,
    private router: Router,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any> | Observable<never> {
      const id = route.paramMap.get('id');

      return this.crisisService.getCrisis(id).pipe(
        mergeMap(crisis => {
          if (crisis) {
            return of(crisis);
          } else {
            this.router.navigate(['/crisis']);
            return EMPTY;
          }
        })
      );
  }

}
