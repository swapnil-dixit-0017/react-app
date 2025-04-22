import { DELETE_MOVIE, FETCH_MOVIES } from "./actions";

export type MovieActionTypes =
  | { type: typeof FETCH_MOVIES; payload: any[] }
  | { type: typeof DELETE_MOVIE; payload: any };
