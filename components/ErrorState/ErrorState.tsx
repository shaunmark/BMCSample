import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ErrorStateProps as Props} from './ErrorState.type';

export function ErrorState(props: Props) {
  return (
    <View style={cn.errorWrapper}>
      <Text style={cn.prompt}>Sorry, Something went wrong</Text>
      <Pressable onPress={props.onPressTryAgain}>
        <Text style={cn.anchor}>Try Again</Text>
      </Pressable>
    </View>
  );
}

const cn = StyleSheet.create({
  errorWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  prompt: {
    color: 'black',
    fontSize: 24,
  },
  anchor: {
    color: '#247BA0',
    textDecorationColor: '#247BA0',
    marginHorizontal: 'auto',
    fontSize: 18
  },
});
