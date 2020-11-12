import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  state= {
    movies: movieData
  }

  generateMovieCards = () => {
    return this.state.movies.map(movie => <MovieCard key={movie.key} title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>)


    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        {console.log(this)}
      </div>
    )
  }
}
