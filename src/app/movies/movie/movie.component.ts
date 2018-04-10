import { Component, OnInit, Input } from '@angular/core';

import {Movie} from './movie.model'

@Component({
  selector: 'mt-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie
  constructor() { }

  ngOnInit() {
  }

}
