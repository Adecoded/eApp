import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import productsScreen from './screens/ProductsScreen';
import ShoppingCart from './screens/ShoppingCart';
import { Pressable, Text,StyleSheet } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';
const Stack = createNativeStackNavigator();

 const Navigation = () => {

  const numberofItems =useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor: 'white'}}}>
        <Stack.Screen name="Products" component={productsScreen}  
        options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{ flexDirection: 'row' }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={styles.cartItems}>{numberofItems}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Product Details" component={ProductDetailsScreen} options={{presentation: 'modal'}}/>
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 const styles =StyleSheet.create({
    cartItems:{
marginLeft:5,
fontWeight:'500',
    },
 })
export default Navigation;