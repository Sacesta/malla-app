import { View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Images, Svgs } from '../../theme'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { MyMallaText } from '../../components'
import { useColors } from '../../hooks'

const HomeScreen = ({ navigation }) => {

    const Colors = useColors()
    const { mainContainer, imgStyle, mapImage, menuBtn, bottomView, searchView, cardTitle, cardSubTitle, cardImg } = styles()

    const renderCard = (Images, title, subTitle) => (
        <View style={{ width: 260, height: 175 }}>
            <Image source={Images} style={cardImg} />
            <MyMallaText fontFamily="semiBold" fontSize='md' color={Colors.white} style={cardTitle}>{title}</MyMallaText>
            <MyMallaText fontFamily="regular" fontSize='md' color={Colors.white} style={cardSubTitle}>{subTitle}</MyMallaText>
        </View>
    )

    return (
        <View style={mainContainer}>
            <TouchableOpacity style={menuBtn}>
                <Svgs.Drawer width={20} height={20} />
            </TouchableOpacity>
            <Image source={Images.homeImg} style={imgStyle} />
            <Image source={Images.homeMap} style={mapImage} />
            <View style={bottomView}>
                <TouchableOpacity style={searchView} activeOpacity={.8} onPress={() => navigation.navigate('SearchScreen')}>
                    <AntDesign name="search1" size={24} color={Colors.placeholder} />
                    <MyMallaText fontFamily="regular" fontSize='md' color={Colors.placeholder} style={{ marginLeft: 8 }}>Search</MyMallaText>
                </TouchableOpacity>
                <FlatList
                    data={nearList}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => renderCard(item.Images, item.title, item.subTitle)}
                />
            </View>
        </View>
    )
}

export default HomeScreen

const nearList = [
    { title: 'Foodies Pizzaa', subTitle: '1.5 km away', Images: Images.nearRestaurant2 },
    { title: 'Cafe Coffee', subTitle: '1.8 km away', Images: Images.nearRestaurant1 },
    { title: 'Pizza Hut', subTitle: '2.0 km away', Images: Images.nearRestaurant2 },
]
