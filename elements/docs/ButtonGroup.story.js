import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { ButtonGroup } from 'react-native-elements';

storiesOf('ButtonGroup', module)
    .add('from official doc', () => {
        const buttons = ['Hello', 'World', 'Buttons'];

        return (
            <ButtonGroup
                onPress={action('onPress')}
                selectedIndex={0}
                buttons={buttons}
                containerStyle={{height: 100}}
            />
        );
    });