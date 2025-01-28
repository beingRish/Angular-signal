import { Component } from '@angular/core';
import { MovieListComponent } from "../movie-list/movie-list.component";
import { FormsModule } from '@angular/forms';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MovieListComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';
  selectedMovie!: Movie;

  onMovieSelection(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
