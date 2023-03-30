import { Text, View, StyleSheet, Pressable } from 'react-native'

export const CategoryGridTile = ({ color, title, onPress }) => {

    return (
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderColor: 'black',
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 18,
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})
