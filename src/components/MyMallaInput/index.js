import React, { useState, useRef } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Fonts } from '../../theme';

const MyMallaInput = ({
    isPassword = false,
    style,
    inputImage,
    isRightIcon = false,
    rightIconName,
    onRightIconPress,
    activeBorderColor = 'blue',
    inactiveBorderColor = 'gray',
    iconSize = 24,
    iconColor = '#BDBDBD',
    ...restProps
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const inputRef = useRef(null);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const borderColor = isFocused ? activeBorderColor : inactiveBorderColor;

    return (
        <View style={[styles.container, { borderColor }, style]}>
            {inputImage}
            <TextInput
                ref={inputRef}
                style={styles.input}
                secureTextEntry={isPassword && !isPasswordVisible}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...restProps}
            />
            {
                isRightIcon && (
                    <TouchableOpacity
                        onPress={onRightIconPress}
                        style={styles.iconContainer}
                    >
                        {rightIconName}
                    </TouchableOpacity>
                )
            }
            {isPassword && (
                <TouchableOpacity
                    onPress={togglePasswordVisibility}
                    style={styles.iconContainer}
                >
                    <Icon
                        name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                        size={iconSize}
                        color={iconColor}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: .5,
        borderRadius: 50,
        paddingHorizontal: 16,
        marginVertical: 5,
        shadowColor: "#BDBDBD",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 5,
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        fontFamily: Fonts.regularBarlow
    },
    iconContainer: {
        paddingLeft: 10,
    },
});

export default MyMallaInput;