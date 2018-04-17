import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {AboutComponent} from './about/about.component'

import {MoviesComponent} from './movies/movies.component'

import {MovieDetailComponent} from './movie-detail/movie-detail.component'

import {MenuComponent} from './movie-detail/menu/menu.component'

import {ReviewsComponent} from './movie-detail/reviews/reviews.component'

import {OrderComponent} from './order/order.component'

export const ROUTES: Routes =[

  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch:'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent},
]
