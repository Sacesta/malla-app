import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useColors } from '../../hooks'
import Entypo from 'react-native-vector-icons/Entypo'
import { Svgs } from '../../theme'
import MyMallaText from '../MyMallaText'

const MyMallaHeader = ({ headerTitle, Search = true, Filter = true, Cart = true }) => {

    const Colors = useColors()
    const navigation = useNavigation()

    const mainView = {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.black,
        paddingVertical: 10,
        marginHorizontal: '4%'
    }
    const titleText = {
        flex: 1,
        marginLeft: '5%',
    }
    const IconView = {
        flexDirection: 'row',
        justifyContent: Search && Filter && Cart ? 'space-between' : Search && Filter || Search && Cart || Filter && Cart ? 'space-around' : 'flex-end',
        width: '28%',
    }

    return (
        <View style={mainView}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Entypo name="chevron-thin-left" size={22} color={Colors.white} />
            </TouchableOpacity>
            <MyMallaText fontFamily="medium" fontSize='lg' color={Colors.white} style={titleText} numberOfLines={1} ellipsizeMode='tail' >{headerTitle ?? 'Diet Food Restaurent'}</MyMallaText>
            <View style={IconView}>
                {Search && <TouchableOpacity>
                    <Svgs.Search width={20} height={20} />
                </TouchableOpacity>}
                {Filter && <TouchableOpacity>
                    <Svgs.Filter width={20} height={20} />
                </TouchableOpacity>}
                {Cart && <TouchableOpacity>
                    <Svgs.Cart width={20} height={20} />
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default MyMallaHeader