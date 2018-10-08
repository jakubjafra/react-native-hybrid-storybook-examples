import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { boolean } from '@storybook/addon-knobs/react';

import { Text } from 'react-native';
import { Overlay } from 'react-native-elements';

storiesOf('Overlay', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Overlay isVisible={boolean('isVisible', true)}>
                <Text>Hello from Overlay!</Text>
            </Overlay>
        </React.Fragment>
    ));