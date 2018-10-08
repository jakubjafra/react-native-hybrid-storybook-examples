import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { Header } from 'react-native-elements';
import { text } from '@storybook/addon-knobs/react';

storiesOf('Header', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        </React.Fragment>
    ));