import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {

  url = 'https://api.themoviedb.org/3';

  constructor(
    private http: HttpClient
  ) {

   }

  getMovies(page) {
    const url = `${this.url}/discover/movie?api_key=`;
    return this.http.get(`${url}${environment.movieDB}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}`);
  }

  getMovie(id) {
    const url = `${this.url}/movie/${id}?api_key=`;
    return this.http.get(`${url}${environment.movieDB}`);
  }

  getImage(id, image) {
    const url = `${this.url}/movie/${id}?api_key=`;
    return this.http.get(`${url}${environment.movieDB}${image}`);
  }
}
