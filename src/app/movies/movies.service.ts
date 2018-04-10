import {Injectable} from "@angular/core"

import {Observable} from "rxjs/Observable"

import {Http} from "@angular/http"

import 'rxjs/add/operator/map'

import {Movie} from "./movie/movie.model"

import {MEAT_API} from "../app.api"

@Injectable()
export class MoviesService{

  constructor(private http:Http){}

  movies(): Observable<Movie[]>{
    return this.http.get(`${MEAT_API}/movies`).map(response => response.json());
  }
}
