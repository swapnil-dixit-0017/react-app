import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MovieSearch from './components/MovieSearch/MovieSearch';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Header from './components/Header/Header';

function App() {
    return (
        <>
        <Header></Header>
            <Routes>
                <Route path="/" element={<MovieSearch />} />
                <Route path="/moviedetails" element={<MovieDetails />} />
                <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
        </>

    );
}

export default App;
