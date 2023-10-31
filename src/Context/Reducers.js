export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":    
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }], totalAmount: state.totalAmount+action.payload.price };
     
    case "Remove_from_cart":
      let amountDeleted = action.payload.product.price * action.payload.product.qty;
    return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.product.id),
        totalAmount: state.totalAmount - amountDeleted
      };

    case "REMOVE":
      //return console.log('Remove')
      // return {
      //   ...state,
      //   cart: state.cart.filter((c) => c.id !== action.payload.id),
      // };
      if(action.payload.product.qty === 0){
        return {
            ...state,
            cart: state.cart.filter((c) => c.id !== action.payload.id),
          };
      }
      const existingCartInde = state.cart.findIndex((item) => item.id === action.payload.product.id);
      const existingCartIte = state.cart[existingCartInde];
      let updatedCartt = [...state.cart], amtt= action.payload.product.price;
      if(existingCartIte){
         amtt = existingCartIte.price * action.payload.qty;
        updatedCartt[existingCartInde] = {...existingCartIte, qty: action.payload.product.qty - action.payload.qty, billAmt: amtt};
      }
      console.log(updatedCartt)
      return {...state, cart: updatedCartt, totalAmount: state.totalAmount-amtt};


    case "EDIT":
      const existingCartIndex = state.cart.findIndex((item) => item.id === action.payload.product.id);
      const existingCartItem = state.cart[existingCartIndex];
      let updatedCart = [...state.cart], amt= action.payload.product.price;
      if(existingCartItem){
         amt = existingCartItem.price * action.payload.qty;
        updatedCart[existingCartIndex] = {...existingCartItem, qty: action.payload.product.qty +action.payload.qty, billAmt: amt};
      }
      console.log(updatedCart)
      return {...state, cart: updatedCart, totalAmount: state.totalAmount+amt};

    default:
      return state;
  }
};
