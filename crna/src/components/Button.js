import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onClick }) => (
    <TouchableOpacity onClick={onClick}>
        <Text>{title}</Text>
    </TouchableOpacity>
);

export default Button;
