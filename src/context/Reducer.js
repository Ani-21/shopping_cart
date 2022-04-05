export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};

// // return a new state object
// return {
//   // that has all the existing state data
//   ...state,
//   // and has a NEW array
//   cart: [
//     // with all of the OLD
//     ...state.cart,
//     // and the new objrct
//     { ...action.payload, qty: 1 },
//   ],
// };
