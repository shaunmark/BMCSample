import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

export type MovieListProps = NativeStackScreenProps<
  RootStackParamList,
  'MovieList'
>;

export type MovieItemType = {
  id: string;
  title: string;
  releaseDate: string;
  posterImage: string;
};
