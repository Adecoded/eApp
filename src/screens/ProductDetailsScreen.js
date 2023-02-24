import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,
  useWindowDimensions,
  Text,
  Pressable,
} from "react-native";
import products from "../Data/products";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";
const ProductDetailsScreen = () => {


  const product = useSelector((state) => state.products.selectedProduct);

  const dispatch = useDispatch();

const addToCart = () => {
  dispatch(cartSlice.actions.addCartItem({product}))
};
  const { width } = useWindowDimensions();
  return (
    <View>
      {/* Image Carousel */}
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}

      <Pressable style={styles.icon}>
        <Ionicons name="close" size={24} color="white" />
      </Pressable>

      <Pressable style={styles.icon_Two}>
        <Ionicons name="share-outline" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#000000AA",
    borderRadius: 50,
    padding: 5,
  },

  icon_Two: {
    position: "absolute",
    top: 50,
    right: 70,
    backgroundColor: "#000000AA",
    borderRadius: 50,
    padding: 5,
  },
});

export default ProductDetailsScreen;
