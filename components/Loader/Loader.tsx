import React from 'react';

import {ActivityIndicator, StyleSheet, View} from 'react-native';

export function Loader() {
  return (
    <View style={cn.loader}>
      <ActivityIndicator size="large" color={'#247BA0'} />
    </View>
  );
}

const cn = StyleSheet.create({
  loader: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
