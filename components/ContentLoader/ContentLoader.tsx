import React from 'react';
import {ErrorState} from '../ErrorState';
import {Loader} from '../Loader';
import {ContentLoaderProps as Props} from './ContentLoader.type';

export function ContentLoader(props: Props): React.JSX.Element {
  if (props.isError)
    return <ErrorState onPressTryAgain={props.onPressTryAgain} />;
  if (props.isLoading) return <Loader />;
  return <>{props.children}</>;
}
