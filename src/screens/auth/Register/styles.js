import { Dimensions, StyleSheet } from "react-native"
import { useColors } from "../../../hooks"
import { Fonts } from "../../../theme"

const styles = () => {

    const Colors = useColors()
    const { width, height } = Dimensions.get('screen')

    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.white
        },
        backBtnView: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginTop: '4%',
        },
        dataView: {
            flex: 1,
            marginHorizontal: '4%',
        },
        bodyText: {
            marginTop: '3%',
            lineHeight: 20,
        },
        btnView: {
            width: '100%',
            marginTop: '8%',
            backgroundColor: Colors.primary,
            borderRadius: 50,
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnText: {
            color: Colors.white,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: Fonts.medium,
        },
        socialSection: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '10%',
        },
        horizontaLine: {
            width: width * 0.35,
            height: 1,
            backgroundColor: Colors.lightGray,
        },
        socialIconView: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '4%'
        },
        socialIcon: {
            width: 36,
            height: 36,
            marginHorizontal: '5%',
        }
    })
}

export default styles