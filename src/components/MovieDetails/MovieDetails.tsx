import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MovieService from '../../services/MovieService';
import { useDispatch } from 'react-redux';
import { DELETE_MOVIE } from '../../store/actions';
import './MovieDetails.css';

const MovieDetails: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const movieInfo = location.state?.movieInfo;

    const handleClickToDelete = () => {
        MovieService.deleteMovie(movieInfo.show.id).then(response => {
            dispatch({
                type: DELETE_MOVIE,
                payload: movieInfo.show.id
            });
        }).catch(error => {
            console.error('Error deleting movie:', error)
        });
    };

    return (
        <>
            <div className='back-button'>
                <NavLink to="/">Back to Search</NavLink>
            </div>
            <h3 className="movie-details-header">Movie Details</h3>
            <div className="movie-details-container">
                {movieInfo && (
                    <div className="movie-details">
                        {movieInfo.show.image?.medium && (
                            <img src={movieInfo.show.image.medium} alt="Movie Poster" />
                        )}
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Title:</strong></td>
                                    <td>{movieInfo.show.name}</td>
                                </tr>
                                <tr>
                                    <td><strong>Type:</strong></td>
                                    <td>{movieInfo.show.type}</td>
                                </tr>
                                <tr>
                                    <td><strong>Language:</strong></td>
                                    <td>{movieInfo.show.language}</td>
                                </tr>
                                <tr>
                                    <td><strong>Rating:</strong></td>
                                    <td>{movieInfo.show.rating?.average || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td><strong>Description:</strong></td>
                                    <td>{movieInfo.show.summary || 'N/A'}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={handleClickToDelete} className="button">Delete Movie</button>
                    </div>
                )}
            </div >
        </>
    );
};

export default MovieDetails;

