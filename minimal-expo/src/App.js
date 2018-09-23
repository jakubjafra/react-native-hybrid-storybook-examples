import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Minimal Expo example for react-native-hybrid-storybook" />
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
