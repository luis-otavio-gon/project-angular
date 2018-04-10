import { Component, OnInit } from '@angular/core';

import {Movie} from './movie/movie.model'

import {MoviesService} from './movies.service'
@Component({
  selector: 'mt-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies: Movie[]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.movies().subscribe(movies => this.movies = movies);
  }
}
