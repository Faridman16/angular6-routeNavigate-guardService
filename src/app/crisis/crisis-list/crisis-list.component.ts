import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crisisList: any[];

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getCrisisList();
  }

  getCrisisList() {
    this.crisisService.getCrisisList().subscribe(crisisList => this.crisisList = crisisList);
  }



}
