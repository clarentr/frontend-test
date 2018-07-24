import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MovieDbService } from './../../service/movie-db.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: any;
  image: string;
  homepage: any;
  options = {};

  constructor(
    private mService: MovieDbService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.mService.getMovie(`${id}`)
      .subscribe((data: any) => {
        this.movie = data;
        this.image = `${data.homepage}${data.poster_path}`;
        this.homepage = data.homepage;
      });
  }

}
