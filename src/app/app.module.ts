import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component'
import { MoviesService } from './movies/movies.service'
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MenuComponent } from './movie-detail/menu/menu.component';
import { ShoppingCartComponent } from './movie-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './movie-detail/menu-item/menu-item.component'
import { ReviewsComponent } from './movie-detail/reviews/reviews.component'
import { ShoppingCartService } from './movie-detail/shopping-cart/shopping-cart.service'
import { OrderComponent } from './order/order.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MoviesService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
