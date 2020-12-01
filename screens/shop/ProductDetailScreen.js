import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageComponent,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  ProductDetailScreen.navigationOptions = (navData) => {
    return {
      headerTitle: navData.navigation.getParam("productTitle"),
    };
  };

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
