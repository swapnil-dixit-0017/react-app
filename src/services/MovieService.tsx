import http from "./http-common";

const findByTitle = (title: string) => {
  return http.get(`shows?q=${title}`);
};

const deleteMovie = (id: number) => {
  return http.delete(`shows/${id}`);
};

const MovieService = {
    findByTitle,
    deleteMovie
};

export default MovieService;
