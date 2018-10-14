import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

storiesOf('Button', module)
    .add('knobs & actions', () => (
        <Button
            TouchableComponent={TouchableOpacity} // TODO: FIXME Platform.OS == 'web' so it uses not-yet-implemented TouchableNativeFeedback
            title={text('title', 'Test button')}
            onPress={action('onPress')}
        />
    ))
    .add('from official doc', () => (
        <React.Fragment>
            <Button
                TouchableComponent={TouchableOpacity}
                title='BUTTON'
            />

            <Button
                TouchableComponent={TouchableOpacity}
                icon={
                    <Icon
                        name='arrow-right'
                        size={15}
                        color='white'
                    />
                }
                title='BUTTON WITH ICON COMPONENT'
            />

            <Button
                TouchableComponent={TouchableOpacity}
                icon={
                    <Icon
                        name='arrow-right'
                        size={15}
                        color='white'
                    />
                }
                title='BUTTON WITH ICON OBJECT'
            />

            <Button
                TouchableComponent={TouchableOpacity}
                icon={<Icon />}
                title='BUTTON WITH CUSTOM ICON'
            />

            <Button
                TouchableComponent={TouchableOpacity}
                icon={
                    <Icon
                        name='arrow-right'
                        size={15}
                        color='white'
                    />
                }
                iconRight
                title='BUTTON WITH RIGHT ICON'
            />

            <Button
                TouchableComponent={TouchableOpacity}
                title="LOADING BUTTON"
                loading
                loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "rgba(92, 99,216, 1)",
                    width: 300,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                }}
                containerStyle={{ marginTop: 20 }}
            />
        </React.Fragment>
    ));