import {MOVIE_API_KEY} from '@env';

const PATHS: Record<ApiRouteTypes, string> = {
  list: 'https://api.themoviedb.org/3/discover/movie',
  details: 'https://api.themoviedb.org/3/movie',
  image: 'https://image.tmdb.org/t/p/w500',
  search: 'https://api.themoviedb.org/3/search/movie',
};

type ApiRouteTypes = 'list' | 'details' | 'image' | 'search';
/**
 *  This function just returns the correct url for each movie service
 * @param type type of api url
 * @param route for specifying additional route
 * @param searchParams search params to be added to url
 * @returns API url
 */
export const getApiRoute = (
  type: ApiRouteTypes,
  route = '',
  searchParams?: Record<string, string>,
): string => {
  const url = `${PATHS[type]}${route}?api_key=${MOVIE_API_KEY}`;
  if (!searchParams) return url;
  const searchParamString = Object.entries(searchParams).reduce(
    (acc, [key, value]) => `${acc}&${key}=${value}`,
    '',
  );
  return `${url}${searchParamString}`;
};
