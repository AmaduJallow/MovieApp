import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService'

class Films extends Component {
    state = {
        movies: getMovies(),
    }
    delete(show) {
        const newMovies = this.state.movies.filter(movie => {
            return (movie._id !== show._id) && movie
        });

        this.setState({
            movies: newMovies
        });
    }

    render() {
        const { movies } = this.state;
        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <th>Title</th>
                    <th>Rating</th>
                    <th>Stock</th>
                    <th></th>
                </thead>
                <tbody>
                    {movies.map(movie =>
                    (

                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>{movie.numberInStock}</td>
                            <td style={{textAlign:'center'}}>
                                <button
                                    onClick={() => this.delete(movie)}
                                    className="btn btn-danger btn-sm px-3 py-1">
                                    Delete</button></td>
                        </tr>

                    )
                    )
                    }

                </tbody>
            </table>
        );
    }
}

export default Films;