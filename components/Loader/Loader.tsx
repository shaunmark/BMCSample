import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export function Loader() {
  return <Text style={cn.loadingText}>Loading...</Text>;
}

const cn = StyleSheet.create({
  loadingText: {
    color: 'black',
    fontSize: 16,
  },
});
