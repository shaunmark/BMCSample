import React from 'react';
import type {PropsWithChildren} from 'react';
import {MovieList} from './screens/MovieList';
import {MovieDetails} from './screens/MovieDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MovieContextProvider} from './context/movie';

export type RootStackParamList = {
  MovieList: undefined;
  MovieDetails: {movieName: string};
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <MovieContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="MovieList"
            component={MovieList}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={({route}) => ({title: `Movie: ${route.params.movieName}`})}
          />
        </Stack.Navigator>
      </MovieContextProvider>
    </NavigationContainer>
  );
}

export default App;
