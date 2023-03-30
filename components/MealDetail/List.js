import { View, Text, StyleSheet } from "react-native"

export const List = ({data}) => {
  return data.map((ingredients) => (
       <View style={styles.listItem} key={ingredients}>
        <Text style={styles.itemText}>{ingredients}</Text>
       </View>
  ));
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical:4,
        marginHorizontal: 12,
        backgroundColor: '#A2EBF6'
    },
    itemText: {
        color: '#000000',
        textAlign: 'center'
    }
});