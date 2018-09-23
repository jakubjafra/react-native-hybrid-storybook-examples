import React from 'react';
import {
    storiesOf,
    fullScreenHostDecorator,
} from 'react-native-hybrid-storybook';
import Button from './Button';

storiesOf('Button', module)
    .addDecorator(fullScreenHostDecorator)
    .addWithJSX('Example', () => (
        <Button title="Test button" />
    ));