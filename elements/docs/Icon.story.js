import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import { Icon } from 'react-native-elements';

storiesOf('Icon', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Icon
                name='rowing' />
            <Icon
                name='g-translate'
                color='#00aced' />
            <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
            />
            <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
            />
            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={action('onPress')} />
        </React.Fragment>
    ));