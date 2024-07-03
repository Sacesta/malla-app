import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Images, Svgs } from '../../../theme'
import { useColors } from '../../../hooks'
import { MyMallaButton, MyMallaInput, MyMallaText } from '../../../components'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const RegisterScreen = ({ navigation }) => {

    const Colors = useColors()
    const { mainContainer, backBtnView, dataView, bodyText, btnView, btnText, socialSection, horizontaLine, socialIconView, socialIcon } = styles()

    const handlePress = () => {
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                <View style={dataView}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={backBtnView}>
                        <Entypo name="chevron-thin-left" size={24} color={Colors.black} />
                    </TouchableOpacity>
                    <Svgs.logo width={100} height={100} style={{ marginTop: '2%' }} />
                    <MyMallaText fontFamily="medium" fontSize='xl' color={Colors.black}>Sign up</MyMallaText>
                    <MyMallaText fontFamily="regularBreuer" fontSize='md' color={Colors.lightGray} style={bodyText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</MyMallaText>
                    <MyMallaText fontFamily="semiBold" fontSize="sm" color={Colors.lightGray} style={{ marginTop: '6%', marginBottom: '1%' }}>
                        Your first and last name
                    </MyMallaText>
                    <MyMallaInput
                        inputImage={<Svgs.user width={20} height={20} />}
                        placeholder="| e.g John Doe"
                        placeholderTextColor={Colors.placeholder}
                        activeBorderColor={Colors.primary}
                        inactiveBorderColor={Colors.placeholder}
                    />
                    <MyMallaText fontFamily="semiBold" fontSize="sm" color={Colors.lightGray} style={{ marginTop: '6%', marginBottom: '1%' }}>
                        Enter your email address
                    </MyMallaText>
                    <MyMallaInput
                        inputImage={<Entypo name="mail" size={20} color={Colors.placeholder} />}
                        placeholder="| e.g john.doe@gmail.com"
                        keyboardType="email-address"
                        placeholderTextColor={Colors.placeholder}
                        activeBorderColor={Colors.primary}
                        inactiveBorderColor={Colors.placeholder}
                    />
                    <MyMallaText fontFamily="semiBold" fontSize="sm" color={Colors.lightGray} style={{ marginTop: '6%', marginBottom: '1%' }}>
                        Enter your mobile number
                    </MyMallaText>
                    <MyMallaInput
                        inputImage={<MaterialIcons name="phone-iphone" size={20} color={Colors.placeholder} />}
                        placeholder="| 99885 58963"
                        keyboardType="email-address"
                        placeholderTextColor={Colors.placeholder}
                        activeBorderColor={Colors.primary}
                        inactiveBorderColor={Colors.placeholder}
                    />
                    <MyMallaText fontFamily="semiBold" fontSize="sm" color={Colors.lightGray} style={{ marginTop: '4%', marginBottom: '1%' }}>
                        Password
                    </MyMallaText>
                    <MyMallaInput
                        inputImage={<Svgs.Lock width={20} height={20} />}
                        placeholder="| ********"
                        isPassword={true}
                        placeholderTextColor={Colors.placeholder}
                        activeBorderColor={Colors.primary}
                        inactiveBorderColor={Colors.placeholder}
                    />
                    <MyMallaButton
                        title="Create An Account"
                        buttonStyle={btnView}
                        onPress={() => console.log('Sign up')}
                        textStyle={btnText}
                    />
                    <View style={socialSection}>
                        <View style={horizontaLine} />
                        <MyMallaText fontFamily="semiBold" fontSize="md" color={Colors.black} style={{ marginHorizontal: 0, padding: 0 }}>
                            Or with
                        </MyMallaText>
                        <View style={horizontaLine} />
                    </View>
                    <View style={socialIconView}>
                        <Image source={Images.google} style={socialIcon} />
                        <Image source={Images.facebook} style={socialIcon} />
                    </View>
                    <MyMallaText fontFamily="regularBreuer" fontSize="md" color={Colors.lightGray} style={{ marginTop: '10%', textAlign: 'center' }}>
                        Already Registered? <MyMallaText fontFamily="semiBold" fontSize="md" color={Colors.primary} onPress={handlePress}>Sign up</MyMallaText>
                    </MyMallaText>
                </View>
            </ScrollView>
        </View>
    )
}

export default RegisterScreen