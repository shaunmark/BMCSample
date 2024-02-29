import React from 'react';

import {ActivityIndicator, StyleSheet, View} from 'react-native';

export function Loader() {
  return (
    <View>
      <ActivityIndicator size="large" color={'#247BA0'} />
    </View>
  );
}
