import {
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { increase, decrease, addItem } from '../redux/actions/index';
import React from 'react';

function App({ value, items, increase, decrease, addItem }) {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello World! My counter is set at: {value}
      </Text>
      <Button
        title="Increase"
        onPress={() => {
          increase(2);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          decrease(2);
        }}
      />
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter item"
      />
      <Button
        title="Add Item"
        onPress={() => {
          addItem(inputValue);
          setInputValue('');
        }}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter.value,
  items: state.counter.items,
});
const mapDispatchtoProps = { increase, decrease, addItem };

export default connect(mapStateToProps, mapDispatchtoProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 10,
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    marginTop: 5,
    borderRadius: 5,
  },
});
