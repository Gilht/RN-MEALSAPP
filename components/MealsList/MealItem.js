import { Text, Pressable, Image, View, StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MealDetails } from "../MealDetails";

export const MealItem = ({ id, title, imgUrl, affordability,
  complexity, duration }) => {

  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id
    })
  }

  
  return (
    <View style={styles.item}>
      <Pressable onPress={navigationHandler}>
        <View>
          <Image style={styles.image} source={{ uri: imgUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>

      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 18,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
})