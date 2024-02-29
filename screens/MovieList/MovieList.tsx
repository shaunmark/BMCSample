import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {getMovieList} from '../../services/movie.service';
import {MovieItemType, MovieListProps as Props} from './MovieList.type';
import {useMovieContext} from '../../context/movie';
import {ContentLoader} from '../../components/ContentLoader';

export function MovieList({navigation}: Props): React.JSX.Element {
  const [movieList, setMovieList] = React.useState<MovieItemType[]>([]);
  const [isError, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const movieContext = useMovieContext();

  const fetchMovieList = React.useCallback(async () => {
    setLoading(true);
    setError(false);
    const {isError, data} = await getMovieList();
    setError(isError);
    if (!isError) setMovieList(data);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchMovieList();
  }, []);

  const navigateToDetails = (id: string) => () => {
    movieContext.actions.setMovieSelection(id);
    navigation.navigate('MovieDetails');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ContentLoader
        isError={isError}
        isLoading={isLoading}
        onPressTryAgain={fetchMovieList}>
        <View style={cn.list}>
          <FlatList
            scrollEnabled
            data={movieList}
            renderItem={({item}) => (
              <MovieItem
                key={item.id}
                {...item}
                onClick={navigateToDetails(item.id)}
              />
            )}
          />
        </View>
      </ContentLoader>
    </SafeAreaView>
  );
}

type MovieItemProps = MovieItemType & {
  onClick: () => void;
};
function MovieItem(props: MovieItemProps) {
  return (
    <TouchableHighlight
      style={cn.movieCardWrapper}
      activeOpacity={0.7}
      onPress={props.onClick}>
      <View style={cn.movieCard}>
        <View style={cn.movieContent}>
          <Image style={cn.moviePoster} src={props.posterImage} />
          <View style={cn.movieText}>
            <Text style={cn.movieTitle}>{props.title}</Text>
            <Text style={cn.defaultText}>{props.releaseDate}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const cn = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    padding: 18,
    columnGap: 18,
  },
  movieCardWrapper: {
    marginBottom: 12,
    borderRadius: 4,
    overflow: 'hidden',
  },
  movieCard: {
    padding: 12,
    backgroundColor: 'white',
    height: 120 + 12 * 2,
    flexWrap: 'wrap',
    columnGap: 12,
    flexDirection: 'row',
  },
  movieContent: {
    flexDirection: 'row',
    flex: 1,
  },
  movieText: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 12,
  },
  movieTitle: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  defaultText: {
    color: 'grey',
  },
  moviePoster: {
    height: 120,
    width: 120,
    borderRadius: 6,
  },
});
