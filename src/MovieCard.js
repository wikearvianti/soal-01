import { Component } from "react";

class MovieCard extends Component {
  movie = {};

  constructor(props) {
    super();
  }

  render() {
    return (
        <div className="card h-100">
          <img
            src={this.movie.image_url}
            className="card-img-top"
            alt="skilvul"
          />
          <div className="card-body">
            {/* <h5 className="card-title">{ this.name }</h5> */}
            <h5 className="card-title">{this.movie.title}</h5>
            <h6 className="card-subtitle mb-2">
                    <span className={this.props.movie.type=== "Movie" ? `badge bg-danger` :  `badge bg-success`}>{this.props.movie.type}</span>
                </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-body">
            <a
              href={this.movie.url}
              className="btn btn-primary w-100 text-uppercase"
            >
              readmore
            </a>
          </div>
        </div>
    )}
}

export default MovieCard;