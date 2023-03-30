import { View, Text, StyleSheet, FlatList } from "react-native";
import { MealItem } from "./MealItem";

export const MealsList = ({items}) => {
    const rennderMealItem = (itemData) => {
        const item = itemData.item;
    
        const mealItemProps = {
          title: item.title,
          imgUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration : item.duration,
          id: item.id
        }
        return <MealItem {...mealItemProps}
        />
      }

    return (
        <View style={styles.container}>
          <FlatList data={items} 
          keyExtractor={(item) => item.id}
          renderItem={rennderMealItem}
          />
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16
    },
  });
