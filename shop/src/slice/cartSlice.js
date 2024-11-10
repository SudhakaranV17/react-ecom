import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    status: false,
  },
  reducers: {
    addToCart(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update existing item quantity
        existingItem.quantity = quantity;
        state.status = true;
      } else {
        // Add new item
        state.items.push({ id, quantity });
        state.status = true;
      }

      // Recalculate total items
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      console.log("Total items in cart:", state.totalItems);
      console.log("items in cart:", state.items);
    },
    removeFromCart(state, action) {
      const idToRemove = action.payload; // Get the id of the item to remove
      state.items = state.items.filter((item) => item.id !== idToRemove); // Filter out the item
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      ); // Recalculate total items
    },

    clearCart(state) {
      state.items = [];
      state.totalItems = 0; // Reset total items
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
