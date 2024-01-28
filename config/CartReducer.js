import {createSlice} from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: [],
    },
    reducers: {
        addToCart:(state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent) {
                itemPresent.qty++;
            } else {
                state.cart.push({...action.payload.qty});
            }
        },

        removeFromCart : (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem;
        },

        incrementQty : (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            itemPresent.qty++;
        },

        decrementQty: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent.qty == 1) {
                itemPresent.qty = 0;
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem;
            } else {
                itemPresent.qty--;
            }
        }

    }
});

export const {addToCart, removeFromCart, incrementQty, decrementQty} = CartSlice.actions;

export default CartSlice.reducer;