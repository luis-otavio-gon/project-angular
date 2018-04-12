import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../movies/movies.service'

import {Movie} from '../movies/movie/movie.model'

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

  movie: Movie

  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit() {

      this.moviesService.movieById(this.route.snapshot.params['id'])
        .subscribe(movie => this.movie = movie)
  }

}
