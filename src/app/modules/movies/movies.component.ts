import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { MovieDbService } from './../service/movie-db.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any;
  pageNumber: number;
  totalPages: number;
  totalResults: number;
  pageSize: number;

  page: PageEvent

  constructor(
    private mService: MovieDbService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.mService.getMovies(`${1}`)
      .subscribe((data: any) => {
        this.pageSize = data.results.length;
        this.movies = data.results;
        this.pageNumber = data.page;
        this.totalPages = data.total_pages;
        this.totalResults = data.total_results;
      });
  }

  pageEvent(event) {
    this.mService.getMovies(`${event.pageIndex}`)
      .subscribe((data: any) => {
        this.pageSize = data.results.length;
        this.movies = data.results;
        this.pageNumber = data.page;
        this.totalPages = data.total_pages;
        this.totalResults = data.total_results;
      });
  }

  goto(id){
    this.router.navigate(['movie', id]);
  }
}
