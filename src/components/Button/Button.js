import React from 'react'
import { TouchableOpacity,Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Button.style';

function Button({icon,text,onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.button_text}><Icon name={icon} size={15} color="#fff"/> {text}</Text>
        </TouchableOpacity>
    )
}
export default Button;