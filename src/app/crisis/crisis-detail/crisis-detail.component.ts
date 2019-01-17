import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService,
  ) { }

  ngOnInit() {
    this.getCrisis();
  }

  getCrisis() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const crisis_id = params.get('id');
        return this.crisisService.getCrisis(crisis_id);
      })
    ).subscribe(crisis => this.crisis = crisis);
  }

  goToCrisis(crisis_id) {
    this.router.navigate(['../', {id: crisis_id, foo: 'foo'}], {relativeTo: this.route});
  }

}
