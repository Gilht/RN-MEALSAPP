import { StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from './screens/CategoriesScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MealsViewScreen } from './screens/MealsViewScreen';
import { MealDetail } from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#002244' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#002244' },
      drawerContentStyle: { backgroundColor: "#002244" },
      drawerInactiveTintColor: 'white',
      drawerActiveBackgroundColor: '#C5F2F9'
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => (
          <Ionicons name='list' color={color} size={size} />),
      }} />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
        title: 'Favorite Meals',
        drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (

    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        {/* <FavoritesContextProvider > */}
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Drawer' component={DrawerNavigator} options={{
                headerShown: false,
              }} />
              <Stack.Screen name='MealsView' component={MealsViewScreen} options={{
                contentStyle: { backgroundColor: '#002244' },
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#002244' }
              }}
              />
              <Stack.Screen name='MealDetail' component={MealDetail} options={{
                title: 'Meal Information',
                contentStyle: { backgroundColor: '#002244' },
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#002244' }
              }} />

            </Stack.Navigator >
          </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

