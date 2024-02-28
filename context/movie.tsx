import React from 'react';

type MovieContextType = {
  state: {
    selectedId: string;
  };
  actions: {
    setMovieSelection: (arg: string) => void;
  };
};

const INITIAL_STATE = {
  selectedId: '',
};
const ACTION_INIT = {
  setMovieSelection: () => undefined,
};

const MovieContext = React.createContext<MovieContextType>({
  state: INITIAL_STATE,
  actions: ACTION_INIT,
});

export const useMovieContext = () => React.useContext(MovieContext);

type MovieContextProviderProps = React.PropsWithChildren<{}>;
export function MovieContextProvider(props: MovieContextProviderProps) {
  const [state, setState] =
    React.useState<MovieContextType['state']>(INITIAL_STATE);

  const actions: MovieContextType['actions'] = {
    setMovieSelection: (movieId: string) => {
      setState(prev => ({...prev, selectedId: movieId}));
    },
  };

  return (
    <MovieContext.Provider value={{state, actions}}>
      {props.children}
    </MovieContext.Provider>
  );
}
