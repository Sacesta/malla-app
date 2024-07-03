import { View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { Svgs } from '../../theme'

const SplashScreen = ({ navigation }) => {

    const { mainContainer } = styles()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnboardingScreen')
        }, 2000)
    }, [])

    return (
        <View style={mainContainer}>
            <Svgs.logo />
        </View>
    )
}

export default SplashScreen