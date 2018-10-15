import React from 'react';
import { storiesOf, fullScreenHostDecorator } from 'react-native-hybrid-storybook';
import { select, boolean } from '@storybook/addon-knobs/react';

import { View, Text } from 'react-native';
import { iOSColors, iOSUIKit } from 'react-native-typography';

storiesOf('iOSUIKit', module)
    .addDecorator(fullScreenHostDecorator)
    .add('from official doc', () => {
        const styleValues = Object.keys(iOSUIKit);
        const styleKey = select('Style', styleValues, styleValues[0]);

        const colorValues = Object.keys(iOSColors).reverse();
        const colorKey = select('Color', colorValues, colorValues[0]);

        const blackBackground = boolean('Black background?', false);

        return (
            <View
                style={[
                    blackBackground && {
                        backgroundColor: 'black',
                    },
                ]}
            >
                <Text
                    style={[
                        iOSUIKit[styleKey],
                        {
                            color: iOSColors[colorKey],
                        }
                    ]}
                >
                    Hello iOS UI Kit!
                </Text>
            </View>
        );
    });