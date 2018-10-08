import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import { Rating } from 'react-native-elements';

storiesOf('Rating', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Rating
                showRating
                onFinishRating={action('onFinishRating')}
                style={{ paddingVertical: 10 }}
            />
            <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={3.6}
                readonly
                imageSize={40}
                onFinishRating={action('onFinishRating')}
                style={{ paddingVertical: 10 }}
            />
            <Rating
                type="heart"
                ratingCount={3}
                fractions={2}
                startingValue={1.57}
                imageSize={40}
                onFinishRating={action('onFinishRating')}
                showRating
                style={{ paddingVertical: 10 }}
            />
        </React.Fragment>
    ));