import { Dimensions, StyleSheet } from "react-native"
import { useColors } from "../../hooks"

const styles = () => {

    const Colors = useColors()
    const { width, height } = Dimensions.get('screen')

    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.primary
        },
        menuBtn: {
            position: 'absolute',
            top: 20,
            left: 20,
        },
        imgStyle: {
            width: '100%',
            height: 300,
            alignSelf: 'center',
            marginTop: '5%',
            resizeMode: 'contain'
        },
        mapImage: {
            width: '100%',
            height: height - 300,
            resizeMode: 'contain',
            marginTop: '-20%',
            alignSelf: 'center'
        },
        bottomView: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 240,
            alignItems: 'center'
        },
        searchView: {
            width: '90%',
            height: 50,
            backgroundColor: Colors.white,
            borderRadius: 50,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
        },
        cardTitle: {
            position: 'absolute',
            bottom: 60,
            left: 40
        },
        cardSubTitle: {
            position: 'absolute',
            bottom: 38,
            left: 40
        },
        cardImg: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
        }
    })
}

export default styles