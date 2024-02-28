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

function parseMovieList(data: MovieListResponseType['results']) {
  return data.map(
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
export async function getMovieDetails(
  id: string,
): Promise<ReponseInterface<MovieDetailsType>> {
  try {
    console.log(id);
    const response = await fetch(getApiRoute('details', `/${id}`));
    const data = (await response.json()) as unknown as MovieDetailsResponseType;
    const movieDetails = parseMovieDetails(data);
    console.log(movieDetails);
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
