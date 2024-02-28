import {MOVIE_API_KEY} from '@env';

const PATHS: Record<ApiRouteTypes, string> = {
  list: 'https://api.themoviedb.org/3/discover/movie',
  details: 'https://api.themoviedb.org/3/movie',
  image: 'https://image.tmdb.org/t/p/w500',
};

type ApiRouteTypes = 'list' | 'details' | 'image';
export const getApiRoute = (type: ApiRouteTypes, route = ''): string => {
  return `${PATHS[type]}${route}?api_key=${MOVIE_API_KEY}`;
};
