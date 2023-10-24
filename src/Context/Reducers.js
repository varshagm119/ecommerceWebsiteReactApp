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
      let updatedCart = [...state.cart]
      if(existingCartItem){
        updatedCart[existingCartIndex] = {...existingCartItem, qty:  action.payload.qty};
      }
      
      console.log(updatedCart)

      return {...state, cart: updatedCart};

    default:
      return state;
  }
};
