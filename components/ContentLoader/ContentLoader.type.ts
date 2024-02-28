import React from 'react';

export type ContentLoaderProps = React.PropsWithChildren<{
  isError: boolean;
  isLoading: boolean;
  onPressTryAgain: () => void;
}>;
