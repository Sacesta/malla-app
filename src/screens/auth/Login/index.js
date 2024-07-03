import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Images, Svgs } from '../../../theme'
import { useColors } from '../../../hooks'
import { MyMallaButton, MyMallaInput, MyMallaText } from '../../../components'

const LoginScreen = ({ navigation }) => {

    const Colors = useColors()
    const { mainContainer, dataView, bodyText, btnView, btnText, socialSection, horizontaLine, socialIconView, socialIcon } = styles()

    const handlePress = () => {
        navigation.navigate('RegisterScreen')
    }

    const handleForgot = () => {
        navigation.navigate('ForgotScreen')
    }

    const handleLogin = () => {
        navigation.navigate('LanguageSetScreen')
    }

    return (
        <View style={mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                <View style={dataView}>
                    <Svgs.logo width={100} height={100} style={{ marginTop: '14%' }} />
                    <MyMallaText fontFamily="medium" fontSize='xl' color={Colors.black}>Sign in</MyMallaText>
                    <MyMallaText fontFamily="regularBreuer" fontSize='md' color={Colors.lightGray} style={bodyText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</MyMallaText>
                    <MyMallaText fontFamily="semiBold" fontSize="sm" color={Colors.lightGray} style={{ marginTop: '6%', marginBottom: '1%' }}>
                        Email or Username or Mobile number
                    </MyMallaText>
                    <MyMallaInput
                        inputImage={<Svgs.user width={20} height={20} />}
                        placeholder="| e.g John Doe"
                        placeholderTextColor={Colors.placeholder}
                        activeBorderColor={Colors.primary}
                        inactiveBorderColor={Colors.placeholder}
                    />
                    <MyMallaText fontFamily="semiBold" fontSize="sm" color={Colors.lightGray} style={{ marginTop: '4%', marginBottom: '1%' }}>
                        Password
                    </MyMallaText>
                    <MyMallaInput
                        inputImage={<Svgs.Lock width={20} height={20} />}
                        placeholder="********"
                        isPassword={true}
                        placeholderTextColor={Colors.placeholder}
                        activeBorderColor={Colors.primary}
                        inactiveBorderColor={Colors.placeholder}
                    />
                    <MyMallaText fontFamily="semiBold" fontSize="sm" color={Colors.placeholder} style={{ textAlign: 'right', marginTop: '2%' }} onPress={handleForgot}>
                        Forgot Password?
                    </MyMallaText>
                    <MyMallaButton
                        title="Login"
                        buttonStyle={btnView}
                        onPress={handleLogin}
                        textStyle={btnText}
                    />
                    <View style={socialSection}>
                        <View style={horizontaLine} />
                        <MyMallaText fontFamily="semiBold" fontSize="md" color={Colors.black} style={{ marginHorizontal: 0, padding: 0 }}>
                            Or login with
                        </MyMallaText>
                        <View style={horizontaLine} />
                    </View>
                    <View style={socialIconView}>
                        <Image source={Images.google} style={socialIcon} />
                        <Image source={Images.facebook} style={socialIcon} />
                    </View>
                    <MyMallaText fontFamily="regularBreuer" fontSize="md" color={Colors.lightGray} style={{ marginTop: '10%', textAlign: 'center' }}>
                        Don't have an account? <MyMallaText fontFamily="semiBold" fontSize="md" color={Colors.primary} onPress={handlePress}>Sign up</MyMallaText>
                    </MyMallaText>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen