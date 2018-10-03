import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
    .add('#1', () => (
        <Button
            TouchableComponent={TouchableOpacity} // Platform.OS == 'web' so it uses not-yet-implemented TouchableNativeFeedback
            title={text('title', 'Test button')}
            onPress={action('onPress')}
        />
    ));