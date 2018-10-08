import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';

import { PricingCard } from 'react-native-elements';

storiesOf('PricingCard', module)
    .add('from official doc', () => (
        <React.Fragment>
            <PricingCard
                color='#4f9deb'
                title='Free'
                price='$0'
                info={['1 User', 'Basic Support', 'All Core Features']}
                button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
            />
        </React.Fragment>
    ));