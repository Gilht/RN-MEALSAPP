import { View, Text, StyleSheet } from "react-native"

export const MealDetails = ({duration, affordability, complexity, style, textStyle}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
            <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }})