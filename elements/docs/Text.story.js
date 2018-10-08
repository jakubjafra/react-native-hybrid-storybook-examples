import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';

import { Text } from 'react-native-elements';

storiesOf('Text', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Text h1>Heading 1</Text>
            <Text h2>Heading 2</Text>
            <Text h3>Heading 3</Text>
            <Text h4>Heading 4</Text>
        </React.Fragment>
    ));