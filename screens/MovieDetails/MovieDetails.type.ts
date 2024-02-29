import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export type MovieDetailsProps = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;
export type MovieDetailsType =
  | {
      title: string;
      releaseDate: string;
      posterImage: string;
      overview: string;
      releaseStatus: string;
      genres: string;
    }
  | undefined;
