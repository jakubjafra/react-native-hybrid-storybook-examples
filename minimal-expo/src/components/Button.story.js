import React from 'react';
import {
    storiesOf,
    fullScreenHostDecorator,
} from 'react-native-hybrid-storybook';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import Button from './Button';

storiesOf('Button', module)
    .addDecorator(fullScreenHostDecorator)
    .add('Example', () => (
        <Button
            onClick={action('onClick')}
            title={text('title', 'Test button')}
        />
    ));