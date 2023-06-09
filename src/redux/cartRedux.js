import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += parseInt(action.payload.price) * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const { productId } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === productId
      );
      if (productIndex !== -1) {
        const removedProduct = state.products[productIndex];
        const removedQuantity = removedProduct.quantity; // Get the quantity of the removed product
        state.quantity -= removedQuantity;
        state.total -= removedProduct.price * removedQuantity;
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
