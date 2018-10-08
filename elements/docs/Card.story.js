import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
];

storiesOf('Card', module)
    .add('from official doc', () => (
        <React.Fragment>
            <Card title="CARD WITH DIVIDER">
                {users.map((u, i) => {
                    return (
                        <View key={i}>
                            <Image
                                resizeMode="cover"
                                source={{ uri: u.avatar }}
                            />
                            <Text>{u.name}</Text>
                        </View>
                    );
                })}
            </Card>
            <Card containerStyle={{ padding: 0 }} >
                {users.map((u, i) => {
                    return (
                        <ListItem
                            key={i}
                            roundAvatar
                            title={u.name}
                            avatar={{ uri: u.avatar }}
                        />
                    );
                })}
            </Card>
            <Card
                title='HELLO WORLD'
                image={{ uri: users[0].avatar }}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    TouchableComponent={TouchableOpacity}
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW' />
            </Card>
        </React.Fragment>
    ));