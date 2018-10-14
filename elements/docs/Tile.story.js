import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';

import { Tile } from 'react-native-elements';

storiesOf('Tile', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Tile
                imageSrc={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                featured
                caption="Some Caption Text"
            />
        </React.Fragment>
    ));