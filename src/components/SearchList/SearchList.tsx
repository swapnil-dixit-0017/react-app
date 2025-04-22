import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import MovieService from '../../services/MovieService';
import { FETCH_MOVIES } from '../../store/actions';
import { MovieShow } from '../../store/types';
import './SearchList.css';


interface SearchListProps {
  items: MovieShow[];
  onSelect?: (item: MovieShow | undefined) => void;
}

const SearchList: React.FC<SearchListProps> = ({ items, onSelect }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  // Debounce for keyup event
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 500); // wait 500ms

    return () => clearTimeout(handler);
  }, [query]);

  // Fetch movies API call
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    showMovieDetails(undefined);
    MovieService.findByTitle(debouncedQuery.trim()).then(response => {
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      });
    }).catch(error => {
      console.error('Error fetching movies:', error)
    });

  }, [debouncedQuery, dispatch]);

  const showMovieDetails = (item: MovieShow | undefined) => {
    if (onSelect) {
      onSelect(item);
    }
  }

  return (
    <div className="search-list-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      <ul className="list-disc">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="list-item" onClick={() => showMovieDetails(item)}>
              {item?.show?.name}
            </li>
          ))
        ) : (
          query !== '' ?
            (<li className="">No results found</li>) : (<li className="">Please enter a search term</li>)
        )}
      </ul>
    </div >
  );
};

export default SearchList;