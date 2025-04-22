import {
    FETCH_MOVIES,
    DELETE_MOVIE
  } from './actions';
  
  const initialState: any[] = [];
  
  const movieReducer = (movies = initialState, action: any) => {
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_MOVIES:
        return [...payload];
  
      case DELETE_MOVIE:
        return movies.filter(({ id }) => id !== payload.id);
  
      default:
        return movies;
    }
  };
  
  export default movieReducer;