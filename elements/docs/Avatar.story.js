import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { Avatar } from 'react-native-elements';
import { text } from '@storybook/addon-knobs/react';

storiesOf('Avatar', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Avatar
                size="small"
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <Avatar
                size="medium"
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <Avatar
                size="large"
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <Avatar
                size="xlarge"
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
        </React.Fragment>
    ));