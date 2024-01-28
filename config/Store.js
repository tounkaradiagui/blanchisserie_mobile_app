import { configureStore} from '@reduxjs/toolkit'

import CartReducer from './config/CartReducer'

export default configureStore({
    reducer: {
        cart: CartReducer
    }
});