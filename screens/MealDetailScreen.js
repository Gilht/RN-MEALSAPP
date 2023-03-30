import { Text, View, Image, StyleSheet, ScrollView} from "react-native"
import { MealDetails } from "../components/MealDetails"
import { MEALS } from "../data/dummy-data"
import { Subtitle } from "../components/MealDetail/Subtitle"
import { List } from "../components/MealDetail/List"
import { useContext, useLayoutEffect } from "react"
import { IconButton } from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, addRemove, removeFavorite } from "../store/redux/favorites"
import { useSelector, useDispatch} from "react-redux"

export const MealDetail = ({ route, navigation}) => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch();

    const idMeal = route.params.mealId
    const choosenMeal = MEALS.find((meal) => meal.id === idMeal)

    const mealIsFavorite = favoriteMealsIds.includes(idMeal);

    const changeFavoriteStatusHandler = () => {
        if(mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(choosenMeal.id);
            dispatch(removeFavorite({id: idMeal}));
        } else {
            // favoriteMealsCtx.addFavorite(choosenMeal.id);
            dispatch(addFavorite({id: idMeal}));
            dispatch
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton name={mealIsFavorite ? 'star' : 'star-outline'} onPress={changeFavoriteStatusHandler} />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: choosenMeal.imageUrl }} />
            <Text style={styles.title}>{choosenMeal.title}</Text>

            <MealDetails duration={choosenMeal.duration}
                affordability={choosenMeal.affordability}
                complexity={choosenMeal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle text={'Ingredients'} />
                    <List data={choosenMeal.ingredients} />
                    <Subtitle text={'Steps'} />
                    <List data={choosenMeal.steps} />
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center'
    }
});
