import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Open up App.js to start working on your app!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
