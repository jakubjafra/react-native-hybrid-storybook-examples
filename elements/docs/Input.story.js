import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

storiesOf('Input', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Input
                placeholder='BASIC INPUT'
            />
            <Input
                placeholder='INPUT WITH ICON'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            />
            <Input
                placeholder='INPUT WITH CUSTOM ICON'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
            <Input
                placeholder='INPUT WITH SHAKING EFFECT'
                shake
            />
            <Input
                placeholder='INPUT WITH ERROR MESSAGE'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
            />
        </React.Fragment>
    ));