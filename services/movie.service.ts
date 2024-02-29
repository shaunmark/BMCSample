import {MovieDetailsType} from '../screens/MovieDetails/MovieDetails.type';
import {MovieItemType} from '../screens/MovieList/MovieList.type';
import {getApiRoute} from '../utils/service.utils';

interface ReponseInterface<T> {
  isError: boolean;
  data: T;
}
type MovieListResponseType = {
  page: number;
  results: {
    id: number;
    original_title: string;
    backdrop_path: string;
    release_date: string;
    poster_path: string;
  }[];
};
/**
 * Fetch request that returns a list of movies
 */
export async function getMovieList(): Promise<
  ReponseInterface<MovieItemType[]>
> {
  try {
    const response = await fetch(getApiRoute('list'));
    const data = (await response.json()) as unknown as MovieListResponseType;
    const movieListData = parseMovieList(data.results);
    return {
      isError: false,
      data: movieListData,
    };
  } catch (e) {
    console.error(e);
    return {
      isError: true,
      data: [],
    };
  }
}
/**
 * helper function for movie listing
 */
function parseMovieList(data: MovieListResponseType['results']) {
  return data?.map(
    ({id, original_title, backdrop_path, release_date, poster_path}) => ({
      id: `${id}`,
      title: original_title,
      posterImage: getApiRoute('image', poster_path),
      releaseDate: new Date(release_date).getFullYear().toString(),
    }),
  );
}

type MovieDetailsResponseType = {
  id: number;
  original_title: string;
  backdrop_path: string;
  release_date: string;
  poster_path: string;
  overview: string;
  status: string;
  genres: {id: number; name: string}[];
};
/**
 * Fetch request for retrieving movie details
 * @param id movie ID
 */
export async function getMovieDetails(
  id: string,
): Promise<ReponseInterface<MovieDetailsType>> {
  try {
    const response = await fetch(getApiRoute('details', `/${id}`));
    const data = (await response.json()) as unknown as MovieDetailsResponseType;
    const movieDetails = parseMovieDetails(data);
    return {
      isError: false,
      data: movieDetails,
    };
  } catch (e) {
    console.error(e);
    return {
      isError: true,
      data: undefined,
    };
  }
}
/**
 * helper function for movie details
 */
function parseMovieDetails(data: MovieDetailsResponseType) {
  return {
    id: `${data.id}`,
    title: data.original_title,
    posterImage: getApiRoute('image', data.backdrop_path),
    releaseDate: new Date(data.release_date).toLocaleDateString(),
    releaseStatus: data.status,
    overview: data.overview,
    genres: data.genres.map(({name}) => name).join(', '),
  };
}

/**
 * Fetch request for returning list of movies wrt search text
 * @param searchQuery search text
 */
export async function queryMovieList(
  searchQuery: string,
): Promise<ReponseInterface<MovieItemType[]>> {
  try {
    const response = await fetch(
      getApiRoute('search', '', {query: searchQuery}),
    );
    const data = (await response.json()) as unknown as MovieListResponseType;
    const movieListData = parseMovieList(data.results);
    return {
      isError: false,
      data: movieListData,
    };
  } catch (e) {
    console.error(e);
    return {
      isError: true,
      data: [],
    };
  }
}
