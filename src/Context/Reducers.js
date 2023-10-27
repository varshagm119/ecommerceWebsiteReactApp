export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "Edit":
      const existingCartIndex = state.cart.findIndex((item) => item.id === action.payload.product.id);
      const existingCartItem = state.cart[existingCartIndex];
      let updatedCart = [...state.cart], amt= action.payload.product.price;
      if(existingCartItem){
         amt = existingCartItem.price * action.payload.qty;
        updatedCart[existingCartIndex] = {...existingCartItem, qty:  action.payload.qty, billAmt: amt};
      }
      
      
      return {...state, cart: updatedCart, totalAmount: state.totalAmount+amt};

    default:
      return state;
  }
};
