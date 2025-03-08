import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

class MoviesList extends Component {
  render() {
    const {movies} = this.props

    return (
      <div className="movies-grid">
        {movies.map(movie => {
          const {
            id,
            poster_path: posterPath,
            title,
            vote_average: voteAverage,
          } = movie
          return (
            <div key={id} className="movie-card">
              <img src={`${IMAGE_BASE_URL}${posterPath}`} alt="Movie Poster" />
              <h3>{title}</h3>
              <p>Rating: {voteAverage}</p>
              <Link to={`/movie/${id}`}>
                <button>View Details</button>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MoviesList
