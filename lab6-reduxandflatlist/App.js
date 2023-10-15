import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Counter from './CounterList/counterlist';
import store from './redux/store/index'
import{Provider} from 'react-redux'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Counter />
    </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
