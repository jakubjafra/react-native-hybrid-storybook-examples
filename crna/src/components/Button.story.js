import React from 'react';
import {
    storiesOf,
} from 'react-native-hybrid-storybook';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Button', module)
    .add('Example', () => (
        <Button
            onClick={action('onClick')}
            title={text('title', 'Test button')}
        />
    ));