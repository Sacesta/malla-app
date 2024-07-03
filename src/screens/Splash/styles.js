import { Dimensions, StyleSheet } from "react-native"
import { useColors } from "../../hooks"

const styles = () => {

    const Colors = useColors()
    const { width, height } = Dimensions.get('screen')

    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center'
        },
    })
}

export default styles