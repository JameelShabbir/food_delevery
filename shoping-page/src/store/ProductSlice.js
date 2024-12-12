import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

const initialState = {
    data: [],
    status: StatusCode.IDLE,
    totalQuantity: 0,
    totalPrice: 0,
}
const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = StatusCode.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = StatusCode.IDLE
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = StatusCode.ERROR
            });
    }

});

export const { fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProducts = createAsyncThunk('product/get', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});

