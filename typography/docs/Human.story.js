import React from 'react';
import { storiesOf, fullScreenHostDecorator } from 'react-native-hybrid-storybook';
import { select, boolean } from '@storybook/addon-knobs/react';

import { View, Text } from 'react-native';
import { human, iOSColors } from 'react-native-typography';

storiesOf('Human Interface Guidelines', module)
    .addDecorator(fullScreenHostDecorator)
    .add('from official doc', () => {
        const styleValues = Object.keys(human);
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
                        human[styleKey],
                        {
                            color: iOSColors[colorKey],
                        }
                    ]}
                >
                    Hello Human!
                </Text>
            </View>
        );
    });