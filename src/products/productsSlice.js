import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories, fetchProducts } from "./productsAPI";

const initialState = {
  products: [],
  totalItems: 0,
  categories: [],
  loading: false,
  error: null,
};

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchCategories();
    } catch (error) {
      return rejectWithValue({
        type: "fetchError",
        message: error.message || "Failed to fetch categories.",
      });
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ page, category }, { rejectWithValue }) => {
    try {
      const data = await fetchProducts(page, category);
      return data;
    } catch (error) {
      return rejectWithValue({
        type: error.status === 404 ? "noData" : "fetchError",
        message: error.message || "An unexpected error occurred.",
      });
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.totalItems = action.payload.total;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.products = [];
        state.totalItems = 0;
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
