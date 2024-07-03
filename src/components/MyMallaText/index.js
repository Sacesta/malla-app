import React from 'react';
import { Text } from 'react-native';
import { Fonts } from '../../theme';

const fontFamilies = {
    regular: Fonts.regularBarlow,
    regularBreuer: Fonts.regularBreuer,
    medium: Fonts.mediumBarlow,
    bold: Fonts.boldBarlow,
    light: Fonts.lightBarlow,
    semiBold: Fonts.semiBoldBarlow,
};

const fontSizes = {
    sm: 10,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
};

const MyMallaText = ({
    children,
    fontFamily = 'regular',
    fontWeight = '400',
    color = 'black',
    fontSize = 'md',
    style,
    ...restProps
}) => {
    const resolvedFontFamily = fontFamilies[fontFamily] || fontFamilies.regular;
    const resolvedFontSize = fontSizes[fontSize] || fontSizes.md;

    const textStyle = {
        fontFamily: resolvedFontFamily,
        fontWeight,
        color,
        fontSize: resolvedFontSize,
    };

    return (
        <Text style={[textStyle, style]} {...restProps}>
            {children}
        </Text>
    );
};

export default MyMallaText;
