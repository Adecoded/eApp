import { createSlice } from '@reduxjs/toolkit';
import products from '../Data/products';

const initialState = {
  products, //products:products simplify to products
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
        setSelectedProduct: (state, action) => {
          state.selectedProduct = state.products.find(
            (p) => p.id === action.payload
          );
        },
  },
});