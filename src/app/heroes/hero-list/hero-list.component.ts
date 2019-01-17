import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, from, Subject } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Hero } from '../heroModel';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: any;
  selectedHero: any;
  request: Subject<any> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router,
  ) { }

  onSelect(hero_id: any): any {
    this.router.navigate(['/heroes/' + hero_id]);
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => this.selectedHero = params.get('id'));

    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

}
