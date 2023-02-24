import React from 'react'
import { StyleSheet, Text, View, Image,FlatList,Pressable} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../store/productsSlice';


const productScreen =({navigation}) => {
  const dispatch =useDispatch();
const products = useSelector(state => state.products.products)
  return (
    <FlatList 
    data={products} 
    renderItem={({item}) =>(
        //component for product containers
        <Pressable onPress={() => 
        {
        
          //update selected proucts

          dispatch(productsSlice.actions.setSelectedProduct(item.id));
        navigation.navigate('Product Details')}} style={styles.itemContainer}>
      <Image source={{
        uri: item.image}}
      style={styles.image} />
      </Pressable>
    )}
    numColumns={2}
    />
   
  )
}

const styles = StyleSheet.create({

    image:{
      width: '100%',
      aspectRatio:1,
    },
    itemContainer:{
      width:'50%',
      padding:1,
    }
  });
  export default productScreen;