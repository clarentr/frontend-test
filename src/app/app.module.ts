import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatPaginatorModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { HeadComponent } from './modules/main/head/head.component';
import { BodyComponent } from './modules/main/body/body.component';
import { FootComponent } from './modules/main/foot/foot.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { LongTextComponent } from './modules/long-text/long-text.component';

import { MovieDbService } from './modules/service/movie-db.service';
import { MoviesComponent } from './modules/movies/movies.component';
import { MovieComponent } from './modules/movies/movie/movie.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Heroes List' } },
  { path: 'movies', component: MoviesComponent, data: { title: 'Movies' } },
  { path: 'movie/:id', component: MovieComponent, data: { title: 'Movie' } },
  { path: 'long-text', component: LongTextComponent, data: { title: 'Long Text' } },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeadComponent,
    BodyComponent,
    FootComponent,
    HomeComponent,
    PageNotFoundComponent,
    LongTextComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [MovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
