import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {SearchBarProps as Props} from './SearchBar.type';

export function SearchBar(props: Props) {
  const [inputText, setInput] = React.useState('');
  const onPressSearch = () => {
    props.onPressSearch(inputText);
  };

  const onChangeText = (text: string) => setInput(text);

  return (
    <View style={cn.searchbar}>
      <TextInput
        style={cn.input}
        value={inputText}
        onChangeText={onChangeText}
        placeholder="Search for a movie..."
      />
      <Button title="Go" color="#247BA0" onPress={onPressSearch} />
    </View>
  );
}

const cn = StyleSheet.create({
  searchbar: {
    gap: 2,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#247BA0',
    margin: 6,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    padding: 8,
  },
});
