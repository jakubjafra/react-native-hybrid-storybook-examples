import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onClick }) => (
    <TouchableOpacity onPress={onClick}>
        <Text>{title}</Text>
    </TouchableOpacity>
);

export default Button;
