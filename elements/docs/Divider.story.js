import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';

import { Divider } from 'react-native-elements';

storiesOf('Divider', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Divider style={{ backgroundColor: 'blue' }} />
        </React.Fragment>
    ));