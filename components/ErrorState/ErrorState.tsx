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
  errorWrapper: {},
  prompt: {
    color: 'black',
    fontSize: 20,
  },
  anchor: {
    color: '#247BA0',
    textDecorationColor: '#247BA0',
    marginHorizontal: 'auto',
  },
});
