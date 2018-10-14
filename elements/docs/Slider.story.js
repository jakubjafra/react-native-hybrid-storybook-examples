import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { View } from 'react-native';
import { Slider } from 'react-native-elements';

storiesOf('Slider', module)
    .add('from official doc', () => (
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
            <Slider
                value={0.2}
                onValueChange={action('onValueChange')}
            />
        </View>
    ));