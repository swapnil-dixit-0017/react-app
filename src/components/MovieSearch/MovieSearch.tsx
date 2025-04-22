import React, { useState } from 'react';
import SearchList from '../SearchList/SearchList';
import { useSelector } from 'react-redux';
import { MovieShow } from '../../store/types';
import './MovieSearch.css';
import { useNavigate } from 'react-router-dom';

const MovieSearch: React.FC = () => {
    const [movieInfo, setMovieInfo] = useState<MovieShow | undefined>(undefined);
    const movieList: MovieShow[] = useSelector((state: any) => state.moviesState || []);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/moviedetails', { state: { movieInfo } });
    };

    return (
        <>
            <h3 className="">Movie Search</h3>
            <div className="container" >
                <SearchList items={movieList} onSelect={(item) => setMovieInfo(item)} />
                <div className='movie-info'>
                    {movieInfo && (
                        <div>
                            <div className="movie-details">
                                {movieInfo.show.image?.medium && (
                                    <img src={movieInfo.show.image.medium} alt="Movie Poster" />
                                )}
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><strong>Title:</strong></td>
                                            <td><button onClick={handleClick} className="link-button">{movieInfo.show.name}</button></td>
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MovieSearch;

