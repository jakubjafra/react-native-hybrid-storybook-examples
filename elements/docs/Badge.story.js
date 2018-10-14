import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { TouchableNative } from 'react-native';
import { Badge, Text } from 'react-native-elements';

storiesOf('Badge', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Badge
                value={3}
                textStyle={{ color: 'orange' }}
            />

            <Badge containerStyle={{ backgroundColor: 'violet'}}>
                <Text>User 1</Text>
            </Badge>

            <Badge onPress={() => {console.log('pressed')}} value="5" />

            <Badge component={TouchableNative} value={10} />
        </React.Fragment>
    ));