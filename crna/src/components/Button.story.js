import React from 'react';
import {
    storiesOf,
    // fullScreenHostDecorator,
} from 'react-native-hybrid-storybook';
import Button from './Button';

storiesOf('Button', module)
    // .addDecorator(fullScreenHostDecorator)
    .add('Example', () => (
        <Button title="Test button" />
    ))
    .add('Example 2', () => (
        <Button title="Test button 2" />
    ));