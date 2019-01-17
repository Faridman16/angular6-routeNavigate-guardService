import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Hero } from '../heroModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = +params.get('id');
        console.log(id);
        return this.heroService.getHero(id);
      })
    ).subscribe(hero => {
      this.hero = hero;
    });
  }

  gotoHeroes(hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }

}
