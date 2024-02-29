import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useMovieContext} from '../../context/movie';
import {getMovieDetails} from '../../services/movie.service';
import {ContentLoader} from '../../components/ContentLoader';
import {
  MovieDetailsProps as Props,
  MovieDetailsType,
} from './MovieDetails.type';

export function MovieDetails({navigation}: Props): React.JSX.Element {
  const [movieDetails, setMovieDetails] = React.useState<MovieDetailsType>();
  const [isError, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  const movieContext = useMovieContext();

  const fetchMovieDetails = async () => {
    setLoading(true);
    setError(false);
    const {isError, data} = await getMovieDetails(
      movieContext.state.selectedId,
    );
    setError(isError);
    if (!isError) setMovieDetails(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ContentLoader
        isError={isError || !movieDetails}
        isLoading={isLoading}
        onPressTryAgain={fetchMovieDetails}>
        <View style={cn.detailsWrapper}>
          <Image style={cn.moviePoster} src={movieDetails?.posterImage} />
          <Text style={cn.movieTitle}>{movieDetails?.title}</Text>
          <Text style={cn.defaultText}>
            <Text style={cn.label}>Genres: </Text>
            {movieDetails?.genres}
          </Text>
          <Text style={cn.defaultText}>
            <Text style={cn.label}>Overview: </Text>
            {movieDetails?.overview}
          </Text>
          <Text style={cn.defaultText}>
            <Text style={cn.label}>Release date: </Text>
            {movieDetails?.releaseDate}
          </Text>
        </View>
      </ContentLoader>
    </SafeAreaView>
  );
}

const cn = StyleSheet.create({
  detailsWrapper: {
    padding: 12,
    gap: 2,
  },
  moviePoster: {
    height: 'auto',
    minHeight: 200,
    width: 'auto',
    marginBottom: 12,
    objectFit: 'cover',
  },
  movieTitle: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
  },
  label: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  defaultText: {
    color: 'grey',
  },
});
