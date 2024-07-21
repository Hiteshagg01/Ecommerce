import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, fetchAll, remove, update } from "../../api/cart";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchAll();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async (Product, { rejectWithValue }) => {
    try {
      const added = await add({ ProductId: Product.id });
      return { ...added, Product };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async (item, { rejectWithValue }) => {
    try {
      return await update(item);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (item, { rejectWithValue }) => {
    try {
      await remove(item);
      return item;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.status = "succeeded";
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })

      .addCase(addCartItem.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        const foundItem = state.items.find(
          (item) => item.id === action.payload.id
        );

        if (!foundItem) {
          state.items.push(action.payload);
        } else {
          foundItem.quantity = action.payload.quantity;
        }
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })

      .addCase(updateCartItem.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        const foundItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        foundItem.quantity = action.payload.quantity;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })

      .addCase(removeCartItem.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter(
          (item) => item.ProductId !== action.payload.ProductId
        );
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });
  },
});

export const { resetStatus } = cartSlice.actions;

export default cartSlice.reducer;
