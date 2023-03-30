import { View, Text, StyleSheet } from "react-native"

export const Subtitle = ({text}) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subTitle: {
        color: '#A2EBF6',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center'
    },
    subTitleContainer: {
        marginHorizontal: 12,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginVertical: 4,
        padding: 6
    }
});
