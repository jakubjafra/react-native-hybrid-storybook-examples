import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { boolean } from '@storybook/addon-knobs/react';

import { CheckBox } from 'react-native-elements';

storiesOf('CheckBox', module)
    .add('from official doc', () => (
        <React.Fragment>
            <CheckBox
                title='Click Here'
                checked={boolean('checked', false)}
            />
            <CheckBox
                center
                title='Click Here'
                checked={boolean('checked', false)}
            />
            <CheckBox
                center
                title='Click Here'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={boolean('checked', false)}
            />
            <CheckBox
                center
                title='Click Here to Remove This Item'
                iconRight
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={boolean('checked', false)}
            />
        </React.Fragment>
    ));