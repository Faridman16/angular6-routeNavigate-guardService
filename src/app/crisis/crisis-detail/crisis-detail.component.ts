import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/_service/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: any;
  beforeEdited: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { crisis }) => {
      this.crisis = data.crisis;
      this.beforeEdited = data.crisis.name;
    });
  }

  getCrisis() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const crisis_id = params.get('id');
        return this.crisisService.getCrisis(crisis_id);
      })
    ).subscribe(crisis => {
      this.crisis = crisis;
      this.beforeEdited = crisis.name;
    });
  }

  goToCrisis(crisis_id) {
    this.router.navigate(['../', {id: crisis_id, foo: 'foo'}], {relativeTo: this.route});
  }

  onSave() {
    this.crisis = this.crisis;
    this.router.navigate(['../']);
  }

  onCancel() {
    this.router.navigate(['../']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.crisis.name !== this.beforeEdited) {
      return this.dialogService.confirm('Discard changes?');
    }

    return true;
  }

}
