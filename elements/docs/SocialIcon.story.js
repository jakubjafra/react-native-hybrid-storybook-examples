import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';

import { SocialIcon } from 'react-native-elements';

storiesOf('SocialIcon', module)
    .add('from official doc', () => (
        <React.Fragment>
            <SocialIcon
                type='twitter'
            />
            <SocialIcon
                raised={false}
                type='gitlab'
            />
            <SocialIcon
                light
                type='medium'
            />
            <SocialIcon
                light
                raised={false}
                type='medium'
            />
            <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
            />
            <SocialIcon
                title='Some Twitter Message'
                button
                type='twitter'
            />
            <SocialIcon
                button
                type='medium'
            />
            <SocialIcon
                button
                light
                type='instagram'
            />
        </React.Fragment>
    ));