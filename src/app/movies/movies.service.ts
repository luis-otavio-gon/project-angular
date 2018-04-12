import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"
import {Http} from "@angular/http"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'
import {Movie} from "./movie/movie.model"
import {MEAT_API} from "../app.api"
import {MenuItem} from "../movie-detail/menu-item/menu-item.model"

@Injectable()
export class MoviesService{
  constructor(private http:Http){}

  movies(): Observable<Movie[]>{
    return this.http.get(`${MEAT_API}/movies`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  movieById(id: string): Observable<Movie>{
    return this.http.get(`${MEAT_API}/movies/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  reviewsOfMovie(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/movies/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  menuOfMovie(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/movies/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}
