import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';
import { text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { SearchBar } from 'react-native-elements';

storiesOf('SearchBar', module)
    .add('from official doc', () => (
        <React.Fragment>
            <SearchBar
                onChangeText={action('onChangeText')}
                onClear={action('onClear')}
                placeholder='Type Here...' />
            <SearchBar
                clearIcon={{ color: 'red' }}
                searchIcon={false} // You could have passed `null` too
                onChangeText={action('onChangeText')}
                onClear={action('onClear')}
                placeholder='Type Here...' />
            <SearchBar
                round
                searchIcon={{ size: 24 }}
                onChangeText={action('onChangeText')}
                onClear={action('onClear')}
                placeholder='Type Here...' />
            <SearchBar
                lightTheme
                onChangeText={action('onChangeText')}
                onClear={action('onClear')}
                placeholder='Type Here...' />
            <SearchBar
                lightTheme
                onChangeText={action('onChangeText')}
                onClear={action('onClear')}
                placeholder='Type Here...' />
            <SearchBar
                showLoading
                platform="ios"
                cancelButtonTitle="Cancel"
                placeholder='Search' />
            <SearchBar
                showLoading
                platform="android"
                placeholder='Search' />
            <SearchBar
                showLoading
                platform="android"
                cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                placeholder='Search' />
        </React.Fragment>
    ));