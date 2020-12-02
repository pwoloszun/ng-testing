import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../../../core/api/hero.service';
import { Hero } from '../../../../core/api/models/hero.model';
import { MetaData } from '../../../../shared/data-table/meta-data';

@Component({
  selector: 'nts-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  heroesMetaData: MetaData[];

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.heroesMetaData = [
      {value: 'universe', text: 'Komiksowe Uniwersum'},
      {value: 'name', text: 'Imie'},
      {value: 'secretIdentity', text: 'Tozsamosc'},
    ];

    this.heroesService.getAll().subscribe((data: Hero[]) => {
      console.log('data table PAGE', data);
      this.heroes = data;
    });
  }

  onHeroClick(hero: Hero) {
    console.log('data table PAGE, selected:', hero);
    this.selectedHero = hero;
  }

}

