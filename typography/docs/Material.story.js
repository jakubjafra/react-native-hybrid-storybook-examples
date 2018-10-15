import React from 'react';
import { storiesOf, fullScreenHostDecorator } from 'react-native-hybrid-storybook';
import { select, boolean } from '@storybook/addon-knobs/react';

import { View, Text } from 'react-native';
import { material, materialColors } from 'react-native-typography';

storiesOf('Material Design', module)
    .addDecorator(fullScreenHostDecorator)
    .add('from official doc', () => {
        const styleValues = Object.keys(material);
        const styleKey = select('Style', styleValues, styleValues[0]);

        const colorValues = Object.keys(materialColors);
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
                        material[styleKey],
                        {
                            color: materialColors[colorKey],
                        }
                    ]}
                >
                    Hello Material!
                </Text>
            </View>
        );
    });