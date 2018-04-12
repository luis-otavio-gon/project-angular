import {Component, OnInit} from '@angular/core';

import {MoviesService} from '../../movies/movies.service'

import {Observable} from 'rxjs/Observable'

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute){ }

  ngOnInit() {
    this.reviews = this.moviesService.reviewsOfMovie(this.route.parent.snapshot.params['id']);
  }

}
